export interface InjectableDependency {
  src: string;
  inject: string | boolean;
  vendor?: boolean;
  env?: string[] | string;
}

export interface Environments {
  DEVELOPMENT: string;
  PRODUCTION: string;
  BACKEND: string;
  [key: string]: string;
}

