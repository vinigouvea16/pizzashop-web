import { RouterProvider } from 'react-router-dom'
// import { Button } from './components/ui/button'
import './global.css'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { router } from './routes'
export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
