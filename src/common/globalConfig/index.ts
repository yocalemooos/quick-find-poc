import axios, { AxiosInstance } from 'axios';
import { Application, ApplicationEvent } from '../application';
declare global {
  interface Window {
    YocaleFinder: Application;
  }
}

const config = {
  register: () => {
    window.YocaleFinder =
      window.YocaleFinder ||
      new Application({
        token:
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMjgwOTU0IiwiZ2l2ZW5uYW1lIjoiQnVzaW5lc3MiLCJzdXJuYW1lIjoiVGFnaGRpc2lhbiIsInN1YiI6InNhZGFmLnRhZ2hkaXNpYW5AeW9jYWxlLmNvbSIsInR5cGUiOiJVc2VyIiwiYnVzaW5lc3NpZHR5cGUiOiJCdXNpbmVzcyIsIm9hdXRoY2xpZW50aWQiOiJkY2FkM2IwNmYyMzI0ZjJkOGI0MGU3YzU0YzE5ZmIzMyIsInJvbGVzIjoiQnVzaW5lc3NPd25lciIsImJ1c2luZXNzaWRzIjoiOTExOCIsImJ1c2luZXNzcm9sZXMiOiJ7XCJCdXNpbmVzc093bmVyXCI6W1wiOTExOFwiXX0iLCJuYmYiOjE3MTE2NTAwMzksImV4cCI6MTcxMTY1MzYzOSwiaWF0IjoxNzExNjUwMDM5LCJpc3MiOiJodHRwczovL2F1dGhlbnRpY2F0aW9uLXBvcy5xYS55b2NhbGUuY29tIiwiYXVkIjoiOGEyMTk4NGQ4NDcxZmFjODdiZGVhNDM3ZmJlZjg5OGNkOTdiZGVhNDM3MDc2MDg1In0.kuqWCQrU6bslWEPIR7QIbOb9P5N6xIlITLwz0YpfNkI',
        baseURL: 'https://qa.api.yocale.com/api',
      });
  },
  getInstance: () => {
    if (!window.YocaleFinder) {
      window.YocaleFinder = new Application({
        token:
          'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMjgwOTU0IiwiZ2l2ZW5uYW1lIjoiQnVzaW5lc3MiLCJzdXJuYW1lIjoiVGFnaGRpc2lhbiIsInN1YiI6InNhZGFmLnRhZ2hkaXNpYW5AeW9jYWxlLmNvbSIsInR5cGUiOiJVc2VyIiwiYnVzaW5lc3NpZHR5cGUiOiJCdXNpbmVzcyIsIm9hdXRoY2xpZW50aWQiOiJkY2FkM2IwNmYyMzI0ZjJkOGI0MGU3YzU0YzE5ZmIzMyIsInJvbGVzIjoiQnVzaW5lc3NPd25lciIsImJ1c2luZXNzaWRzIjoiOTExOCIsImJ1c2luZXNzcm9sZXMiOiJ7XCJCdXNpbmVzc093bmVyXCI6W1wiOTExOFwiXX0iLCJuYmYiOjE3MTE2NTAwMzksImV4cCI6MTcxMTY1MzYzOSwiaWF0IjoxNzExNjUwMDM5LCJpc3MiOiJodHRwczovL2F1dGhlbnRpY2F0aW9uLXBvcy5xYS55b2NhbGUuY29tIiwiYXVkIjoiOGEyMTk4NGQ4NDcxZmFjODdiZGVhNDM3ZmJlZjg5OGNkOTdiZGVhNDM3MDc2MDg1In0.kuqWCQrU6bslWEPIR7QIbOb9P5N6xIlITLwz0YpfNkI',
        baseURL: 'https://qa.api.yocale.com/api',
      });
    }
    return window.YocaleFinder;
  },
};

const configInstance: {
  register: () => void;
  getInstance: () => Application<ApplicationEvent<unknown>>;
  axios: () => AxiosInstance;
} = {
  ...config,
  axios: () => {
    const { baseURL, token } = config.getInstance().getOptions();
    return axios.create({
      baseURL,
      headers: {
        Authorization: token,
      },
    });
  },
};

export default configInstance;
