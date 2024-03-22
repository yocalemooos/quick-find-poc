export type ErrorMessage = string;
export type ErrorCode = string;

export interface APIResponse<T, E = ErrorCode, M = ErrorMessage, S = number> {
  data: T;
  errorCode: E;
  message: M;
  statusCode: S;
}

export interface ListResponseData<T> {
  hasNext: boolean;
  items: Array<T>;
  limit: number;
  offset: number;
}

export interface ListResponse<T> extends APIResponse<ListResponseData<T>> {}
