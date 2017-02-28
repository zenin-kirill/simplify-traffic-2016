import { Component } from "@angular/core";
import { TranslationService, Translation } from "angular-l10n";

@Component({
             moduleId: module.id,
             selector: 'admin-trips-status',
             templateUrl: 'trips-status.component.html',
           })

/**
 * Компопнет, представляющий из себя таблицу, содержащую данные о текущих рейсах
 */
export class TripsStatusComponent extends Translation{
  constructor(public translation: TranslationService) {
    super(translation);
  };
}
