import { useEffect, useState } from 'react'
import axios from 'axios'

export function AuthCheck(): JSX.Element {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios
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
