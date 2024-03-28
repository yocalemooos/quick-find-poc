import { Subscription, Observer } from 'rxjs';
export interface ApplicationOptions {
    baseURL: string | undefined;
    token: string | undefined;
}
export declare enum ApplicationEntity {
    Navigation = "navigation",
    Service = "service",
    Staff = "staff",
    Customer = "customer",
    Client = "client",
    Application = "application"
}
export declare enum ApplicationEventType {
    Redirection = "redirection",
    Initialized = "initialized"
}
export interface ApplicationEvent<T = unknown> {
    entityType: ApplicationEntity;
    type: ApplicationEventType;
    data: T | undefined;
}
export declare class Application<EV extends ApplicationEvent = ApplicationEvent> {
    private baseURL;
    private token;
    private defaultHotkey;
    onOpenDialog: () => Promise<unknown>;
    private event;
    constructor(options?: Partial<ApplicationOptions>);
    setBaseUrl(baseURL: string): void;
    setToken(token: string): void;
    setOptions(options: Partial<ApplicationOptions>): void;
    broadcast(event: EV): void;
    subscribe(callback: Partial<Observer<EV>> | ((value: EV) => void)): Subscription;
    onOpen(func: () => Promise<unknown>): void;
    isReady(): boolean;
    setDefaultHotkey(key: string): void;
    getOptions(): {
        baseURL: string | undefined;
        token: string | undefined;
        defaultHotkey: string;
    };
}
export default Application;
