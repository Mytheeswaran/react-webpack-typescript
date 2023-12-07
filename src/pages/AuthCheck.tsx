import { useEffect, useState } from 'react'
// import axios from 'axios'
import { jwtInterceptor } from '../helpers/jwt-axios-interceptor'

export function AuthCheck(): JSX.Element {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    jwtInterceptor // use jwtInterceptor in place of axios to intercept api requests
      .get('http://localhost:4000/liked-movies', { withCredentials: true })
      .then((res) => {
        setMovies(res.data)
      })
  }, [])

  return (
    <>
      <ul>
        {movies.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </>
  )
}

// Axios Interceptors --> jwtInterceptor: refer https://www.youtube.com/watch?v=FK9PbmAMVeA
