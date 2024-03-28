import React from 'react';
import useGetClients from '../../queries/use-get-clients';
import { ApplicationEntity, ApplicationEventType } from '../../common/application';
import { Autocomplete, Box, CircularProgress, TextField, Typography } from '@mui/material';
import Search from '@mui/icons-material/Search';
import User from '@mui/icons-material/Person';
import Menu from '@mui/icons-material/Menu';
import globalConfig from '../../common/globalConfig';
import { NavigationMenuItems } from '../../common/constants/navigation';
export type AutoCompleteComponentProps = {
  onSelect?: (value?: unknown) => void;
};

const AutoCompleteComponent: React.FC<AutoCompleteComponentProps> = (props) => {
  const { data, isLoading } = useGetClients({});
  const clients: Array<Record<string, string>> = [
    ...NavigationMenuItems,
    ...(data?.data?.items || []),
  ] as unknown as Array<Record<string, string>>;
  return (
    <Autocomplete
      options={clients}
      getOptionLabel={(option) => option?.label || `${option?.firstName} ${option?.lastName}`}
      getOptionKey={(option) => option.id || option.clientId}
      sx={{ minWidth: { xs: 'auto', sm: 400 } }}
      onChange={(_, value) => {
        globalConfig.getInstance().broadcast({
          type: !value?.clientId ? ApplicationEventType.Navigation : ApplicationEventType.Redirection,
          entityType: !value?.clientId ? ApplicationEntity.Navigation : ApplicationEntity.Client,
          data: value,
        });
        props?.onSelect?.(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder='Type to search ...'
          InputProps={{
            ...params.InputProps,
            startAdornment: isLoading ? <CircularProgress size='sm' /> : <Search />,
          }}
        />
      )}
      loading={isLoading}
      renderOption={(props, option) => (
        <Box component='li' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }} {...props}>
          {option.label ? <Menu /> : <User />}
          <Typography sx={{ ml: 2 }} variant='body2'>
            {option?.label || `${option?.firstName} ${option?.lastName}`}
          </Typography>
        </Box>
      )}
    />
  );
};

export default AutoCompleteComponent;
