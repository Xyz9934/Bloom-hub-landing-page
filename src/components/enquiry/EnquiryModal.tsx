import { motion } from 'framer-motion'
import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { submitEnquiry } from '../../services/api/enquiryApi'

type EnquiryModalProps = {
  open: boolean
  onClose: () => void
}

type FormState = {
  fullName: string
  phoneNumber: string
  bouquetName: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>> & {
  message?: string
}

const bouquetOptions = ['Blush Serenade', 'Lavender Whisper', 'Garden Grace', 'Custom Bouquet']

const initialState: FormState = {
  fullName: '',
  phoneNumber: '',
  bouquetName: '',
  message: '',
}

function isValidPhoneNumber(value: string) {
  return /^[0-9+\-\s()]{7,20}$/.test(value.trim())
}

export default function EnquiryModal({ open, onClose }: EnquiryModalProps) {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const instagramUrl = useMemo(
    () => import.meta.env.VITE_INSTAGRAM_URL ?? 'https://instagram.com/shifa.blooms',
    [],
  )

  useEffect(() => {
    if (!open) {
      setForm(initialState)
      setErrors({})
      setIsSubmitting(false)
      setSuccessMessage('')
    }
  }, [open])

  useEffect(() => {
    if (!successMessage) {
      return undefined
    }

    const timer = window.setTimeout(() => {
      window.location.assign(instagramUrl)
    }, 3000)

    return () => window.clearTimeout(timer)
  }, [instagramUrl, successMessage])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open && !isSubmitting) {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isSubmitting, onClose, open])

  if (!open) {
    return null
  }

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.'
    }
    if (!form.phoneNumber.trim()) {
      nextErrors.phoneNumber = 'Phone number is required.'
    } else if (!isValidPhoneNumber(form.phoneNumber)) {
      nextErrors.phoneNumber = 'Enter a valid phone number.'
    }
    if (!form.bouquetName) {
      nextErrors.bouquetName = 'Please select a bouquet.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const result = await submitEnquiry({
        fullName: form.fullName.trim(),
        phoneNumber: form.phoneNumber.trim(),
        bouquetName: form.bouquetName,
        message: form.message.trim(),
      })

      setSuccessMessage(result.message)
    } catch (error) {
      setErrors({
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label="Close enquiry modal overlay"
        className="absolute inset-0 bg-stone-950/55 backdrop-blur-sm"
        onClick={onClose}
        disabled={isSubmitting || Boolean(successMessage)}
      />

      <motion.div
        className="relative z-[71] w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_120px_-35px_rgba(15,23,42,0.45)]"
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <div className="bg-gradient-to-r from-rose-100 via-stone-50 to-emerald-50 px-6 py-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-500">Order Now</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Send your bouquet enquiry</h2>
          <p className="mt-2 text-sm leading-6 text-stone-600">
            Share your details and we&apos;ll get back to you with a beautiful floral response.
          </p>
        </div>

        {successMessage ? (
          <div className="flex flex-col items-center px-6 py-10 text-center sm:px-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-stone-900">Enquiry sent successfully</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">
              Thank you. We&apos;re redirecting you to Instagram in 3 seconds.
            </p>
            <div className="mt-6 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-stone-100">
              <div className="h-full w-full animate-pulse rounded-full bg-emerald-400" />
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6 sm:px-8" noValidate>
            {errors.message ? (
              <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {errors.message}
              </div>
            ) : null}

            <Field label="Full Name" error={errors.fullName}>
              <input
                value={form.fullName}
                onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
                className={inputClass(errors.fullName)}
                type="text"
                autoComplete="name"
                aria-invalid={Boolean(errors.fullName)}
              />
            </Field>

            <Field label="Phone Number" error={errors.phoneNumber}>
              <input
                value={form.phoneNumber}
                onChange={(event) => setForm((current) => ({ ...current, phoneNumber: event.target.value }))}
                className={inputClass(errors.phoneNumber)}
                type="tel"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phoneNumber)}
              />
            </Field>

            <Field label="Bouquet Name" error={errors.bouquetName}>
              <select
                value={form.bouquetName}
                onChange={(event) => setForm((current) => ({ ...current, bouquetName: event.target.value }))}
                className={inputClass(errors.bouquetName)}
                aria-invalid={Boolean(errors.bouquetName)}
              >
                <option value="">Select a bouquet</option>
                {bouquetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Message" optional>
              <textarea
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                className={`${inputClass()} min-h-28 resize-none`}
                rows={4}
                aria-label="Optional message"
              />
            </Field>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="inline-flex flex-1 items-center justify-center rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-semibold text-stone-700 transition hover:border-rose-200 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-stone-900/15 transition hover:-translate-y-0.5 hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? <Spinner /> : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  )
}

function Field({
  label,
  error,
  optional,
  children,
}: {
  label: string
  error?: string
  optional?: boolean
  children: ReactNode
}) {
  return (
    <label className="block space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-stone-700">{label}</span>
        {optional ? <span className="text-xs text-stone-400">Optional</span> : null}
      </div>
      {children}
      {error ? <p className="text-xs font-medium text-rose-600">{error}</p> : null}
    </label>
  )
}

function inputClass(error?: string) {
  return [
    'w-full rounded-2xl border bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-rose-300 focus:bg-white focus:ring-2 focus:ring-rose-100',
    error ? 'border-rose-300' : 'border-stone-200',
  ].join(' ')
}

function Spinner() {
  return (
    <span aria-label="Loading" className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
  )
}
