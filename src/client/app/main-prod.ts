// load using a dynamic compiler (based on Angular AOT)
import { enableProdMode } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { AppModuleNgFactory } from "./app.module.ngfactory";

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

