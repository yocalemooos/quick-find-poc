import { AxiosInstance } from 'axios';
import { Application, ApplicationEvent } from '../application';
declare global {
    interface Window {
        YocaleFinder: Application;
    }
}
declare const configInstance: {
    register: () => void;
    getInstance: () => Application<ApplicationEvent<unknown>>;
    axios: () => AxiosInstance;
};
export default configInstance;
