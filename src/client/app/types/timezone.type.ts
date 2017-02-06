/**
 * Перечисление, содержащее виды используемых часовых поясов
 */
export enum TimezoneType {
  UTC0000,  // + 0 ч.
  UTC0100,  // + 1 ч.
  UTC0200,  // + 2 ч.
  UTC0300,  // + 3 ч.
  UTC0400,  // + 4 ч.
  UTC0500,  // + 5 ч.
  UTC0600,  // + 6 ч.
  UTC0700,  // + 7 ч.
  UTC0800,  // + 8 ч.
  UTC0900,  // + 9 ч.
  UTC1000,  // + 10 ч.
  UTC1100,  // + 11 ч.
  UTC1200   // + 12 ч.
}
;

/**
 * Объект, содержащий сведения о часовых поясах
 */
export const timezoneTypes: any = {
  UTC0000: {json: 'UTC0000', type: TimezoneType.UTC0000},
  UTC0100: {json: 'UTC0100', type: TimezoneType.UTC0100},
  UTC0200: {json: 'UTC0200', type: TimezoneType.UTC0200},
  UTC0300: {json: 'UTC0300', type: TimezoneType.UTC0300},
  UTC0400: {json: 'UTC0400', type: TimezoneType.UTC0400},
  UTC0500: {json: 'UTC0500', type: TimezoneType.UTC0500},
  UTC0600: {json: 'UTC0600', type: TimezoneType.UTC0600},
  UTC0700: {json: 'UTC0700', type: TimezoneType.UTC0700},
  UTC0800: {json: 'UTC0800', type: TimezoneType.UTC0800},
  UTC0900: {json: 'UTC0900', type: TimezoneType.UTC0900},
  UTC1000: {json: 'UTC1000', type: TimezoneType.UTC1000},
  UTC1100: {json: 'UTC1100', type: TimezoneType.UTC1100},
  UTC1200: {json: 'UTC1200', type: TimezoneType.UTC1200}
}
