import { useContext } from 'react';
import ConfigurationProviderContext from '../context';

const useConfiguration = () => {
  const context = useContext(ConfigurationProviderContext);
  return context;
};
export default useConfiguration;
