import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-qr2j.onrender.com',
});
