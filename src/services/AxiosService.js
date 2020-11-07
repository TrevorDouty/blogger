import Axios from 'axios'
export const api = Axios.create({
  baseURL: 'https://cw-bloggr.herokuapp.com/',
  timeout: 10000
})

// NOTE remember to add the auth headers to any axios instance you need auth on.
export const setBearer = function(bearer) {
  api.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  api.defaults.headers.authorization = ''
}
