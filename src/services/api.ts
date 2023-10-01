import axios from 'axios';
import { API_KEY } from '@env';

export const api = axios.create({
  baseURL: 'https://moviesdatabase.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
  },
});
