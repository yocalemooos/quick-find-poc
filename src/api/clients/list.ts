import { AxiosRequestConfig } from 'axios';
import { Client } from './types';
import { ListResponse } from '../types';
import globalConfig from '../../common/globalConfig';

const list = async <T = ListResponse<Client>>(
  url: string = '/v4/clients?limit=100',
  config?: AxiosRequestConfig<unknown> | undefined,
): Promise<T> => {
  return globalConfig
    .axios()
    .get<T>(url, config)
    .then(({ data }) => data);
};
export default list;
