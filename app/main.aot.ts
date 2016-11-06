///<reference path="../typings/index.d.ts"/>
import {enableProdMode} from '@angular/core';
enableProdMode();

// Загрузка с использованием статического компилятора (angular AOT)
import {platformBrowser}    from '@angular/platform-browser';
import {AppModuleNgFactory} from '../aot/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
