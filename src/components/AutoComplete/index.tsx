import React from 'react';
import useGetClients from '../../queries/use-get-clients';
import { ApplicationEntity, ApplicationEventType } from '../../common/application';
import { Autocomplete, Box, CircularProgress, TextField, Typography } from '@mui/material';
import Search from '@mui/icons-material/Search';
import User from '@mui/icons-material/VerifiedUserOutlined';
import globalConfig from '../../common/globalConfig';
export type AutoCompleteComponentProps = {
  onSelect?: (value?: unknown) => void;
};

const AutoCompleteComponent: React.FC<AutoCompleteComponentProps> = (props) => {
  const { data, isLoading } = useGetClients({});
  const clients = data?.data?.items || [];
  return (
    <Autocomplete
      options={clients}
      getOptionLabel={(option) => `${option.clientId}`}
      sx={{ minWidth: { xs: 'auto', sm: 400 } }}
      onChange={(_, value) => {
        globalConfig.getInstance().broadcast({
          type: ApplicationEventType.Redirection,
          entityType: ApplicationEntity.Client,
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
          <User />
          <Typography sx={{ ml: 2 }} variant='body2'>{`${option?.firstName} ${option?.lastName}`}</Typography>
        </Box>
      )}
    />
  );
};

export default AutoCompleteComponent;
