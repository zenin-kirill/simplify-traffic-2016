import { EnvConfig } from './env-config.interface';
import { appVersion } from "../config/seed.config";

const BaseConfig: EnvConfig = {
  VER: appVersion().toString()
};

export = BaseConfig;

