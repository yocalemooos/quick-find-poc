import { AxiosRequestConfig } from 'axios';
import { Client } from './types';
import { ListResponse } from '../types';
declare const list: <T = ListResponse<Client>>(url?: string, config?: AxiosRequestConfig<unknown> | undefined) => Promise<T>;
export default list;
