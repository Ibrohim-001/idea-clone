import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routers from '@/router'
import './i18n.js'
import { ThemeProvider } from './components/theme-provider.js'
import ProductsProvider from './store/products.js'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <ProductsProvider>
        <Routers />
      </ProductsProvider>
    </ThemeProvider>
  </BrowserRouter>
)
