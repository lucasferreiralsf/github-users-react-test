import { createBrowserRouter } from 'react-router-dom'
import { Error404, Home, UserProfile } from '@screens'
import { Routes } from './routes'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: Routes.USER_PROFILE,
    element: <UserProfile />,
    errorElement: <Error404 />,
  },
])
