import Application, { Application as ApplicationClass, ApplicationEntity, ApplicationEventType } from './common/application/index.ts';
declare global {
    interface Window {
        YocaleFinder: ApplicationClass;
    }
}
export { Application, ApplicationEntity, ApplicationEventType };
