import axios from 'axios';
import globalConfig from '../globalConfig';

const { baseURL, token } = globalConfig.getInstance().getOptions();

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: token,
  },
});
export default instance;
