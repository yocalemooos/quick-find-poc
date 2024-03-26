import { useContext } from 'react';
import ApplicationProviderContext from '../context';

const useApplication = () => {
  const context = useContext(ApplicationProviderContext);
  return context;
};
export default useApplication;
