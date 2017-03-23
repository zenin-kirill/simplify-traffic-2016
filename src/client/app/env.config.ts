// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
  ENV?: string; // environment
  API?: string; // API url (prefix)
  VER?: string; // app version
  SUF?: string; // url suffix (.php .json etc)
}

export const Config: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');
