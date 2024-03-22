import { BehaviorSubject, Subscription, Observer } from 'rxjs';

export interface ApplicationOptions {
  baseURL: string | undefined;
  token: string | undefined;
}

export enum ApplicationEntity {
  Navigation = 'navigation',
  Service = 'service',
  Staff = 'staff',
  Customer = 'customer',
  Client = 'client',

  Application = 'application',
}

export enum ApplicationEventType {
  Redirection = 'redirection',
  Initialized = 'initialized',
}

export interface ApplicationEvent<T = unknown> {
  entityType: ApplicationEntity;
  type: ApplicationEventType;
  data: T | undefined;
}

export class Application<EV extends ApplicationEvent = ApplicationEvent> {
  private baseURL: string | undefined;
  private token: string | undefined;

  private event: BehaviorSubject<EV>;

  constructor(options: Partial<ApplicationOptions> = {}) {
    if (options) {
      this.setOptions(options);
    }
    this.event = new BehaviorSubject({
      entityType: ApplicationEntity.Application,
      type: ApplicationEventType.Initialized,
    } as EV);
  }
  public setBaseUrl(baseURL: string) {
    this.baseURL = baseURL;
  }
  public setToken(token: string) {
    this.token = token;
  }
  public setOptions(options: Partial<ApplicationOptions>) {
    this.baseURL = options?.baseURL;
    this.token = options?.token;
  }
  public broadcast(event: EV) {
    this.event.next(event);
  }
  public subscribe(callback: Partial<Observer<EV>> | ((value: EV) => void)): Subscription {
    return this.event.subscribe(callback);
  }
  get() {
    return {
      baseURL: this.baseURL,
      token: this.token,
    };
  }
}

const instance = new Application({
  baseURL: 'https://qa.api.yocale.com/api',
  token: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMjgwOTU0IiwiZ2l2ZW5uYW1lIjoiQnVzaW5lc3MiLCJzdXJuYW1lIjoiVGFnaGRpc2lhbiIsInN1YiI6InNhZGFmLnRhZ2hkaXNpYW5AeW9jYWxlLmNvbSIsInR5cGUiOiJVc2VyIiwiYnVzaW5lc3NpZHR5cGUiOiJCdXNpbmVzcyIsIm9hdXRoY2xpZW50aWQiOiJkY2FkM2IwNmYyMzI0ZjJkOGI0MGU3YzU0YzE5ZmIzMyIsInJvbGVzIjoiQnVzaW5lc3NPd25lciIsImJ1c2luZXNzaWRzIjoiOTExOCIsImJ1c2luZXNzcm9sZXMiOiJ7XCJCdXNpbmVzc093bmVyXCI6W1wiOTExOFwiXX0iLCJuYmYiOjE3MTExMzQ3NDYsImV4cCI6MTcxMTEzODM0NiwiaWF0IjoxNzExMTM0NzQ2LCJpc3MiOiJodHRwczovL2F1dGhlbnRpY2F0aW9uLXBvcy5xYS55b2NhbGUuY29tIiwiYXVkIjoiOGEyMTk4NGQ4NDcxZmFjODdiZGVhNDM3ZmJlZjg5OGNkOTdiZGVhNDM3MDc2MDg1In0.Y1tXCZhiSnk4K_yBkjlzcOwu2HmJu9pjLeYqARRjJD0`,
});
export default instance;
