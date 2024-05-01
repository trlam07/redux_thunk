import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListPage from './components/ProductList'
import ProductDetailPage from './components/ProductDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
