import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://192.168.5.118:8082/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default instance