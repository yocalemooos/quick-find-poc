import axios from 'axios';
import appConfig from '../application';

const { baseURL, token } = appConfig.get();

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: token,
  },
});
export default instance;
