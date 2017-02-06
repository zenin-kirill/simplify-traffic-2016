// Загрузка с использованием динамического компилятора (на основе SystemJS)
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

platformBrowserDynamic().bootstrapModule(AppModule);

