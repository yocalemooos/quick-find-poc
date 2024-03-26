import React from 'react';
import { Application } from '../../common/application';
export type ApplicationProviderContextType = {
  globalConfig: Application;
};

const ApplicationProviderContext = React.createContext<Partial<ApplicationProviderContextType>>({});
export default ApplicationProviderContext;
