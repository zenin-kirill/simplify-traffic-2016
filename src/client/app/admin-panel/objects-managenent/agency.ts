import {TimezoneType} from './timezone.type';
import {LanguageType} from './language.type';

export class Agency {
  private legalName: string;
  private name: string;
  private cityId: string;
  private index: string;
  private address: string;
  private email: string;
  private phone: string;
  private contactName: string;
  private webSiteUrl: string;
  private fareurl: string;
  private language: LanguageType;
  private timezone: TimezoneType;
  private comment: string;
}
