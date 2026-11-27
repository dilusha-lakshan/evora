
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PublicLayout from '../layouts/PublicLayout'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import Unauthorized from '../pages/Unauthorized.jsx'
import LoginPage from '../features/auth/pages/LoginPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
