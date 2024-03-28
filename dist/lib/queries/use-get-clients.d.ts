import { UseQueryOptions } from '@tanstack/react-query';
import { ListResponse } from '../api/types';
import { Client } from '../api/clients/types';
export type useGetClientsParams<T> = {
    options?: UseQueryOptions<T>;
};
declare const useGetClients: <T = ListResponse<Client>>(params: useGetClientsParams<T>) => import("@tanstack/react-query").UseQueryResult<T, Error>;
export default useGetClients;
