import axios, { AxiosError } from 'axios'

export const jwtInterceptor = axios.create({})

jwtInterceptor.interceptors.response.use(
  (res) => {
    return res
  },
  async (resError) => {
    resError = resError as AxiosError // casting resError to AxiosError class to ease intellisense usage (resError.response?.status)
    if (resError.response?.status === 401) {
      await axios
        .get('http://localhost:4000/refresh-token', { withCredentials: true })
        .catch((refreshTokenErr) => {
          localStorage.removeItem('userProfile')
          return Promise.reject(refreshTokenErr)
        })

      return axios(resError.config) // automatically triggers actual endpoint post receiving refresh tokens
    }

    return Promise.reject(resError)
  }
)

// Typing axios error obj - https://stackoverflow.com/questions/69264472/axios-error-typescript-annotation-must-be-any-or-unknown-if
