import { AxiosInstance } from 'axios';
import { Application, ApplicationEvent } from '../application';
declare const configInstance: {
    register: () => void;
    getInstance: () => Application<ApplicationEvent<unknown>>;
    axios: () => AxiosInstance;
};
export default configInstance;
