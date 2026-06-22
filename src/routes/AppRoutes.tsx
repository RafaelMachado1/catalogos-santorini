import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import CatalogPage from '../pages/CatalogPage'
import HomePage from '../pages/HomePage'
import ScrollToTop from './ScrollToTop'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalogo/:slug" element={<CatalogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
