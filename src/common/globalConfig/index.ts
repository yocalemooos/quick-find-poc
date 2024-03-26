import axios, { AxiosInstance } from 'axios';
import { Application, ApplicationEvent } from '../application';

const config = {
  register: () => {
    window.YocaleFinder = window.YocaleFinder || Application;
  },
  getInstance: () => {
    if (!window.YocaleFinder) {
      window.YocaleFinder = new Application();
    }
    return window.YocaleFinder;
  },
};

const configInstance: {
  register: () => void;
  getInstance: () => Application<ApplicationEvent<unknown>>;
  axios: () => AxiosInstance;
} = {
  ...config,
  axios: () => {
    const { baseURL, token } = config.getInstance().getOptions();
    return axios.create({
      baseURL,
      headers: {
        Authorization: token,
      },
    });
  },
};

export default configInstance;
