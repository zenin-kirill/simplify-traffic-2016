/**
 * Перечисление, содежащее типы исключительных дней
 */
export enum ExceptionDateType {
  added,   // рабочий день добавлен
  removed  // рабочий день удален
}

/**
 * Объект, содержащий дополнительные сведения о типах особых дней
 */
export const exceptionDateTypes: any = {
  added: {json: '1', type: ExceptionDateType.added},
  removed: {json: '2', type: ExceptionDateType.removed}
}
