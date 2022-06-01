import axios from 'axios';

const getData = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});

export default getData;
