import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainDialog from '../MainDialog';
import ApplicationProvider from '../../providers/ApplicationProvider';
import globalConfig from '../../common/globalConfig';

console.log({ instance: globalConfig.getInstance() });

const queryClient = new QueryClient();

const YocaleFinder = () => {
  return (
    globalConfig.getInstance().isReady() && (
      <ApplicationProvider>
        <QueryClientProvider client={queryClient}>
          <MainDialog />
        </QueryClientProvider>
      </ApplicationProvider>
    )
  );
};
export default YocaleFinder;
