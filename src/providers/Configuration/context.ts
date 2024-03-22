import React from "react";

export type ConfigurationProviderContextType = {
  env: string;
};

const ConfigurationProviderContext = React.createContext<
  Partial<ConfigurationProviderContextType>
>({});

export default ConfigurationProviderContext;
