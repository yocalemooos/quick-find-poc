import React from 'react';
import { ApplicationEvent } from '../../common/application';
import ApplicationProviderContext, { ApplicationProviderContextType } from './context';
import useApplicationEvent from './hooks/use-application-event';
import globalConfig from '../../common/globalConfig';
export type ApplicationProviderProps = Partial<React.ProviderProps<unknown>> & {
  value?: Partial<ApplicationProviderContextType>;
  onEventPublished?: (event: ApplicationEvent) => void;
};

const ApplicationProvider: React.FC<ApplicationProviderProps> = (props) => {
  const { onEventPublished } = props;
  useApplicationEvent(onEventPublished);

  return (
    <ApplicationProviderContext.Provider
      value={{
        globalConfig: globalConfig.getInstance(),
      }}>
      {props.children}
    </ApplicationProviderContext.Provider>
  );
};

export default ApplicationProvider;
