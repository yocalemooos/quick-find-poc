import { useEffect } from 'react';
import { ApplicationEvent } from '../../../common/application';
import globalConfig from '../../../common/globalConfig';

const useApplicationEvent = (onEventPublished?: (event: ApplicationEvent) => void) => {
  useEffect(() => {
    const subscription = globalConfig.getInstance()?.subscribe?.((...args) => {
      onEventPublished?.(...args);
    });
    return () => {
      subscription?.unsubscribe?.();
    };
  });
};

export default useApplicationEvent;
