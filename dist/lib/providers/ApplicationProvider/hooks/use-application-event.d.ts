import { ApplicationEvent } from '../../../common/application';
declare const useApplicationEvent: (onEventPublished?: ((event: ApplicationEvent) => void) | undefined) => void;
export default useApplicationEvent;
