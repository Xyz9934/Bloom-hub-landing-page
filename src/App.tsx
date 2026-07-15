import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import FullscreenLoader from './components/ui/FullscreenLoader'

const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'))
const EnquiryPage = lazy(() => import('./pages/EnquiryModule/EnquiryPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export default function App() {
  return (
    <Suspense fallback={<FullscreenLoader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/500" element={<NotFoundPage statusCode={500} />} />
        <Route path="*" element={<NotFoundPage statusCode={404} />} />
      </Routes>
    </Suspense>
  )
}
