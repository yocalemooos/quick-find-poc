import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainDialog from '../MainDialog';
import ApplicationProvider from '../../providers/ApplicationProvider';

const queryClient = new QueryClient();

const YocaleFinder = () => {
  return (
    <ApplicationProvider>
      <QueryClientProvider client={queryClient}>
        <MainDialog />
      </QueryClientProvider>
    </ApplicationProvider>
  );
};
export default YocaleFinder;
