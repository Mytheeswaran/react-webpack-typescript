/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type AuthProviderProps = {
  children: ReactNode
}

type Payload = {
  email: string
  password: string
}

type AuthContextType = {
  loginApiCall: (payload: Payload) => void
  user: User
}

type User = {
  email: string
  firstName: string
  id: number
  lastName: string
  phone: string
  iat?: bigint
  exp?: bigint
}

const AuthContext = createContext({} as AuthContextType)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(() => {
    const userProfile = localStorage.getItem('userProfile')
    if (userProfile) {
      return JSON.parse(userProfile)
    }
    return null
  })
  const navigate = useNavigate()

  const loginApiCall = async (payload: Payload) => {
    await axios.post('http://localhost:4000/auth/login', payload, {
      withCredentials: true,
    })

    const userResponse = await axios.get('http://localhost:4000/user-profile', {
      withCredentials: true,
    })

    setUser(userResponse.data)
    localStorage.setItem('userProfile', JSON.stringify(userResponse.data))
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ loginApiCall, user }}>
      {children}
    </AuthContext.Provider>
  )
}

{
  /* 
    withCredentials - Used for cross-origin cookie transfers
        a. During start of the application, the cookie values will be empty under application tab. When the login endpoint is hit, 
          the endpoint authenticates the user and attaches auth cookie in the response. This response auth cookie is then placed in the 
          cookie value under application tab when withCredentials is set to true.

          Even on the browser refresh or closing browser, the cookie persists still. We need to clear manually.

        b. The server will generate a session ID and store it in a cookie on the user's device. On subsequent requests, 
            Axios will automatically include the cookie in the request headers, allowing the server to verify the user's session 
            and grant access to the requested data or resources.

        link- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
        
        Refer timeline: 14:40 in video https://www.youtube.com/watch?v=969UBVOEfxI&t=0s
  */
}
