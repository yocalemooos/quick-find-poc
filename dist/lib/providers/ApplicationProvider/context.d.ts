import React from 'react';
import { Application } from '../../common/application';
export type ApplicationProviderContextType = {
    globalConfig: Application;
};
declare const ApplicationProviderContext: React.Context<Partial<ApplicationProviderContextType>>;
export default ApplicationProviderContext;
