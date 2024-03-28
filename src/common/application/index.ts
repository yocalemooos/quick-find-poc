import { BehaviorSubject, Subscription, Observer } from 'rxjs';

export interface ApplicationOptions {
  baseURL: string | undefined;
  token: string | undefined;
}

export enum NavigationItem {
  Calendar = 'calendar',
  DashboardProvider = 'dashboard-provider',
  DashboardBusiness = 'dashboard-business',
  Client = 'client',
  Staff = 'staff-section',
  Staffs = 'staffs',
  Schedules = 'schedules',
  Business = 'business',
  Settings = 'settings',
  ClientList = 'clients',
  WaitList = 'wait-list',
  Submissions = 'submissions',
  Invoices = 'invoices',
  BusinessProfile = 'business-profile',
  Locations = 'locations',
  Services = 'services',
  Resources = 'resources',
  Forms = 'forms',
  Products = 'products',
  BusinessSettings = 'business-settings',
  WidgetSettings = 'widget-settings',
  Subscription = 'subscriptions',
  RWG = 'reserve-with-google',
  PaymentSettings = 'payment-settings',
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
  Navigation = 'navigation',
}

export interface ApplicationEvent<T = unknown> {
  entityType: ApplicationEntity;
  type: ApplicationEventType;
  data: T | undefined;
}

export class Application<EV extends ApplicationEvent = ApplicationEvent> {
  private baseURL: string | undefined;
  private token: string | undefined;

  private defaultHotkey: string;
  public onOpenDialog: () => Promise<unknown>;
  private event: BehaviorSubject<EV>;

  constructor(options: Partial<ApplicationOptions> = {}) {
    this.defaultHotkey = 'ctrl+k';
    if (options) {
      this.setOptions(options);
    }
    this.event = new BehaviorSubject({
      entityType: ApplicationEntity.Application,
      type: ApplicationEventType.Initialized,
    } as EV);
    this.onOpenDialog = () => new Promise((r) => r(null));
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
  public onOpen(func: () => Promise<unknown>) {
    this.onOpenDialog = func;
  }
  public isReady(): boolean {
    return this.token !== undefined && this.baseURL !== undefined;
  }
  public setDefaultHotkey(key: string) {
    this.defaultHotkey = key;
  }
  getOptions() {
    return {
      baseURL: this.baseURL,
      token: this.token,
      defaultHotkey: this.defaultHotkey,
    };
  }
}

export default Application;
