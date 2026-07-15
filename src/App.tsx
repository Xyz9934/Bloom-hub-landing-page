import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import EnquiryPage from './pages/EnquiryModule/EnquiryPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/enquiry" element={<EnquiryPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
