import { Component } from "@angular/core";
import { TranslationService, LocaleService, Localization } from "angular-l10n";

@Component({
             moduleId: module.id,
             selector: 'admin-dashboard',
             templateUrl: 'dashboard.component.html',
           })

/**
 * Компонент, представляющий собой рабочую часть панели управления
 */
export class DashboardComponent extends Localization{

  constructor(public locale: LocaleService, public translation: TranslationService) {
    super(locale, translation);
  }
}
