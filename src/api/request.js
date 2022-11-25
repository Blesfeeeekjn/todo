import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || '';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  withCredentials: true,
});

export default instance;
