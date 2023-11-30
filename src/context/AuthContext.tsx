/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { createContext, ReactNode, useContext } from 'react'

type AuthProviderProps = {
  children: ReactNode
}

type Payload = {
  email: string
  password: string
}

type AuthContextType = {
  loginApiCall: (payload: Payload) => void
}

const AuthContext = createContext({} as AuthContextType)

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const loginApiCall = async (payload: Payload) => {
    axios.post('http://localhost:4000/auth/login', payload, {
      withCredentials: true,
    })
  }

  return (
    <AuthContext.Provider value={{ loginApiCall }}>
      {children}
    </AuthContext.Provider>
  )
}

{
  /* 
    withCredentials - Used for cross-origin cookie transfers
        a. Carry the cookies from the browser to the server through endpoints
        b. The server will generate a session ID and store it in a cookie on the user's device. On subsequent requests, 
            Axios will automatically include the cookie in the request headers, allowing the server to verify the user's session 
            and grant access to the requested data or resources.

        link- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
        
        Refer timeline: 14:40 in video https://www.youtube.com/watch?v=969UBVOEfxI&t=0s
  */
}
