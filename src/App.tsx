import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import MainDialog from './components/MainDialog';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainDialog />
    </QueryClientProvider>
  );
}

export default App;
