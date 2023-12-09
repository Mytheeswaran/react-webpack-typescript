import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export type ProtectedRouteProps = {
  children: JSX.Element
  accessBy: string
}

export const ProtectedRoute = ({ children, accessBy }: ProtectedRouteProps) => {
  const { user } = useAuthContext()
  if (accessBy === 'non-authenticated-users') {
    if (!user) {
      return children
    }
  } else if (accessBy === 'authenticated-users') {
    if (user) {
      return children
    }
  }
  return <Navigate to="/"></Navigate>
}
