import React from 'react';
import { ApplicationEvent } from '../../common/application';
import { ApplicationProviderContextType } from './context';
export type ApplicationProviderProps = Partial<React.ProviderProps<unknown>> & {
    value?: Partial<ApplicationProviderContextType>;
    onEventPublished?: (event: ApplicationEvent) => void;
};
declare const ApplicationProvider: React.FC<ApplicationProviderProps>;
export default ApplicationProvider;
