import { Link } from 'react-router-dom'
import { siteContent } from '../config/siteContent'

type NotFoundPageProps = {
  statusCode?: 404 | 500
}

export default function NotFoundPage({ statusCode = 404 }: NotFoundPageProps) {
  const isServerError = statusCode === 500

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6 py-16 text-center">
      <div className="max-w-lg rounded-[2rem] border border-white bg-white px-8 py-10 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.25)]">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-400">{statusCode}</p>
        <h1 className="mt-4 text-3xl font-semibold text-stone-900">
          {isServerError ? 'Something went wrong' : 'Page not found'}
        </h1>
        <p className="mt-4 text-base leading-8 text-stone-600">
          {isServerError
            ? 'Please try again in a moment.'
            : 'The page you are looking for does not exist or may have been moved.'}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
          >
            Back to Home
          </Link>
          <a
            href={`tel:+91${siteContent.phoneNumber}`}
            className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-rose-200 hover:bg-rose-50"
          >
            Call Us
          </a>
        </div>
      </div>
    </main>
  )
}
