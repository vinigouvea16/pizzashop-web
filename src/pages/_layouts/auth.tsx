import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <h1>authenticate</h1>

      <div>
        <Outlet />
      </div>
    </>
  )
}
