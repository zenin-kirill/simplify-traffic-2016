/**
 * Перечисление, содежащее типы остановок ТС
 */
export enum HaltType {
  regularly,            // регулярная остановка
  notAvailable,         // запрещення остановка
  coordWithAgency,      // по требованию - по телефону с агенством
  coordWithDriver       // по требованию - лично с водителем
}

/**
 * Объект, содержащий дополнительные сведения о типах остановок ТС
 */
export const haltTypes: any = {
  regularly: {json: '0', type: HaltType.regularly},
  notAvailable: {json: '1', type: HaltType.notAvailable},
  coordWithAgency: {json: '2', type: HaltType.coordWithAgency},
  coordWithDriver: {json: '3', type: HaltType.coordWithDriver}
}
