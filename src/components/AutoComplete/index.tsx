import {
  Autocomplete,
  AutocompleteOption,
  CircularProgress,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from '@mui/joy';
import useGetClients from '../../queries/use-get-clients';
import application, { ApplicationEntity, ApplicationEventType } from '../../common/application';
import Search from '@mui/icons-material/Search';
import User from '@mui/icons-material/FaceOutlined';

const AutoComplete: React.FC<unknown> = () => {
  const { data, isLoading } = useGetClients({});
  const clients = data?.data.items || [];
  return (
    <Autocomplete
      startDecorator={isLoading ? <CircularProgress size='sm' /> : <Search />}
      options={clients}
      getOptionLabel={(option) => `${option?.firstName} ${option?.lastName}`}
      getOptionKey={(option) => option.clientId}
      autoHighlight
      size='lg'
      onChange={(_, value) => {
        application.broadcast({
          type: ApplicationEventType.Redirection,
          entityType: ApplicationEntity.Client,
          data: value,
        });
      }}
      loading={isLoading}
      renderOption={(props, option) => (
        <AutocompleteOption {...props}>
          <ListItemDecorator>
            <User />
          </ListItemDecorator>
          <ListItemContent sx={{ fontSize: 'sm' }}>
            <Typography level='body-xs'>{`${option?.firstName} ${option?.lastName}`}</Typography>
          </ListItemContent>
        </AutocompleteOption>
      )}
    />
  );
};

export default AutoComplete;
