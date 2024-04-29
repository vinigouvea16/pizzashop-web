import { RouterProvider } from 'react-router-dom'
import './global.css'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { router } from './routes'
import { Toaster } from 'sonner'
export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
