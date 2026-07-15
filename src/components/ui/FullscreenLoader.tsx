export default function FullscreenLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-50 px-6">
      <div className="w-full max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.25)]">
        <div className="h-4 w-24 animate-pulse rounded-full bg-stone-200" />
        <div className="mt-5 h-8 w-3/4 animate-pulse rounded-2xl bg-stone-100" />
        <div className="mt-4 h-4 w-full animate-pulse rounded-full bg-stone-100" />
        <div className="mt-3 h-4 w-5/6 animate-pulse rounded-full bg-stone-100" />
      </div>
    </div>
  )
}
