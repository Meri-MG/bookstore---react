import axios from 'axios';

const getData = axios.create({
  baseURL: 'https://protected-taiga-25036.herokuapp.com/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});

export default getData;
