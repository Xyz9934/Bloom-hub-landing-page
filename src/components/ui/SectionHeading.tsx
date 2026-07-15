type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rose-400">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-stone-600">{description}</p>
    </div>
  )
}
