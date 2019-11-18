import axios from 'axios'
import apiUrl from '../constants/apiConfigs';

export const getAllPensioners = () => {
  return axios.get(`${apiUrl}/api/People`);
};