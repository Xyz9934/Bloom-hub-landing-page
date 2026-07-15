import { useEffect } from 'react'

export default function EnquiryPage() {
  useEffect(() => {
    document.title = 'Enquiry Module | Shifa Blooms'
  }, [])

  return (
    <main className="bg-stone-50 px-6 py-20 text-center">
      <h1>Enquiry Module</h1>
      <p>Placeholder route for future enquiry workflow.</p>
    </main>
  )
}
