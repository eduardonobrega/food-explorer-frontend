import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:3000',
  // baseURL: 'https://food-explorer-backend-8cgn624yz-eduardonobrega.vercel.app/',
  baseURL: 'https://foodexplorer-api-74ue.onrender.com/',
})
