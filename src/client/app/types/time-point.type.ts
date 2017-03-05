/**
 * Перечисление, содежащее типы указанчия времени
 */
export enum TimePointType {
  exact,        // точное время (видимо по арсписанию)
  approximate   // приближенное (видимо реальное по ходу ТС)
}

/**
 * Объект, содержащий дополнительные сведения о типах указанчия времени
 */
export const timePointTypes: any = {
  exact: {json: '0', type: TimePointType.approximate},
  approximate: {json: '1', type: TimePointType.exact},

  default: {json: '', type: TimePointType.exact}
}
