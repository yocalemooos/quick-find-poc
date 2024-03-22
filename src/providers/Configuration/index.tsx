import ConfigurationProviderContext, { ConfigurationProviderContextType } from './context';
export type ConfigurationProviderProps = {
  value: Partial<ConfigurationProviderContextType>;
};

const ConfigurationProvider: React.FC<ConfigurationProviderProps> = () => {
  return <ConfigurationProviderContext.Provider value={{ env: 'prod' }}></ConfigurationProviderContext.Provider>;
};

export default ConfigurationProvider;
