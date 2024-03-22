import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { ListResponse } from '../api/types';
import { Client } from '../api/clients/types';
import QueryKeys from './keys';
import list from '../api/clients/list';
export type useGetClientsParams<T> = {
  options?: UseQueryOptions<T>;
};

const useGetClients = <T = ListResponse<Client>>(params: useGetClientsParams<T>) => {
  return useQuery<T>({
    queryKey: QueryKeys.clients.all,
    queryFn: () => {
      return list();
    },
    ...params.options,
  });
};
export default useGetClients;
