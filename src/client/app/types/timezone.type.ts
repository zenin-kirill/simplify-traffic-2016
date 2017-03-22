/**
 * Enumeration containing types of using timezones
 */
export enum TimezoneType {
  UTC0000,  // + 0 h.
  UTC0100,  // + 1 h.
  UTC0200,  // + 2 h.
  UTC0300,  // + 3 h.
  UTC0400,  // + 4 h.
  UTC0500,  // + 5 h.
  UTC0600,  // + 6 h.
  UTC0700,  // + 7 h.
  UTC0800,  // + 8 h.
  UTC0900,  // + 9 h.
  UTC1000,  // + 10 h.
  UTC1100,  // + 11 h.
  UTC1200   // + 12 h.
};

/**
 * Object containing additional information about types of using timezones
 */
export const timezoneTypes: any = {
  UTC0000: {json: 'UTC0000', type: TimezoneType.UTC0000, str: 'UTC+00:00 London'},
  UTC0100: {json: 'UTC0100', type: TimezoneType.UTC0100, str: 'UTC+01:00 Paris, Berlin'},
  UTC0200: {json: 'UTC0200', type: TimezoneType.UTC0200, str: 'UTC+02:00 Kalingrad'},
  UTC0300: {json: 'UTC0300', type: TimezoneType.UTC0300, str: 'UTC+03:00 Moscow'},
  UTC0400: {json: 'UTC0400', type: TimezoneType.UTC0400, str: 'UTC+04:00 Samara'},
  UTC0500: {json: 'UTC0500', type: TimezoneType.UTC0500, str: 'UTC+05:00 Ekaterinburg'},
  UTC0600: {json: 'UTC0600', type: TimezoneType.UTC0600, str: 'UTC+06:00 Omsk'},
  UTC0700: {json: 'UTC0700', type: TimezoneType.UTC0700, str: 'UTC+07:00 Krasnoyarsk'},
  UTC0800: {json: 'UTC0800', type: TimezoneType.UTC0800, str: 'UTC+08:00 Irkutsk, Shanghai'},
  UTC0900: {json: 'UTC0900', type: TimezoneType.UTC0900, str: 'UTC+09:00 Yakutsk'},
  UTC1000: {json: 'UTC1000', type: TimezoneType.UTC1000, str: 'UTC+10:00 Vladivostok'},
  UTC1100: {json: 'UTC1100', type: TimezoneType.UTC1100, str: 'UTC+11:00 Sahalin'},
  UTC1200: {json: 'UTC1200', type: TimezoneType.UTC1200, str: 'UTC+12:00 Kamchatka'}
}
