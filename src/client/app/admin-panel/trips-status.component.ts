import { Component } from "@angular/core";
import { TranslationService, Translation } from "angular-l10n";

@Component({
             moduleId: module.id,
             selector: 'admin-trips-status',
             templateUrl: 'trips-status.component.html',
           })

/**
 * Component representing a table containing data on current trips
 */
export class TripsStatusComponent extends Translation{
  constructor(public translation: TranslationService) {
    super(translation);
  };
}
