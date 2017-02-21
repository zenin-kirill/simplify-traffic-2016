/**
 * Объект, содержащий дополнительные сведения об атрибутах класса
 */
export const sessionAttrs: any = {
  id: {json: 'id'},
  type: {json: 'user-sessions'},
  token: {json: 'token'},
  validUntil: {json: 'valid-until'},
  createdAt: {json: 'created-at'}
}

/**
 * Класс, описывающий сущность сессия работы пользователя
 */
export class Session {
  private id: string;         // идентификатор сессии
  private token: string;      // ключевое слово
  private validUntil: Date;   // срок действия сессии
  private createdAt: Date;    // дата создания сессии

  private userId: string;     // идентификатор пользоватея, для которого создана сессия
  private agencyId: string;   // агенство, на которое работает вошедший вользователь

  private readonly minTokenLength: number = 15;   // мин. длина ключ. слова
  private readonly maxTokenLength: number = 50;   // макс. длина ключ. слова

  //constructor() {
  //  this.set('', '00000000000000000000', new Date(), new Date(), '', '')
  //}

  getValidUntil(): Date {
    return this.validUntil;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getToken(): string {
    return this.token;
  }

  getUserId(): string {
    return this.userId;
  }

  getAgencyId(): string {
    return this.agencyId;
  }

  getId(): string {
    return this.id;
  }

  /**
   * Метод, устанавливающий данные объекта класса из объекта в формате JSON-API
   * Метод проверяет и разбирает объект JSON и передает в строком виде в следующий метод
   * Входным параметром является объект в формате JSON-API
   */
  setOnObject(sessionData: any) {
    if (!((sessionData['type'] === sessionAttrs.type.json) &&
          ( sessionAttrs.id.json in sessionData) &&
          ('id' in sessionData['relationships']['user']['data']) &&
          ('id' in sessionData['relationships']['agency']['data'])))
      throw new Error('Impossible to convert an object Session. Invalid object format');

    for (let obj in  sessionAttrs) {
      if ((obj.toString() === 'id') ||
          (obj.toString() === 'type'))
        continue;
      if (!( sessionAttrs[obj]['json'] in sessionData['attributes']))
        throw new Error('Impossible to convert an object User. Invalid user format');
    }

    this.setOnStrings(sessionData[sessionAttrs.id.json],
                      sessionData['attributes'][sessionAttrs.token.json],
                      sessionData['attributes'][sessionAttrs.validUntil.json],
                      sessionData['attributes'][sessionAttrs.createdAt.json],

                      sessionData['relationships']['user']['data']['id'],
                      sessionData['relationships']['agency']['data']['id'])
  }

  /**
   * Метод, устанавливающий данные объекта класса из данных в строковом формате
   * Метод производит проверку и парсинг строковых значений ствойств и передает готовые
   * значения свойств в следующий метод
   * Входными параметрами являются все свойства объекта класса в строковом формате
   */
  setOnStrings(id: string, token: string, validUntil: string, createdAt: string, userId: string,
               agencyId: string) {
    let createdAtDate  = new Date(Date.parse(createdAt));
    let validUntilDate = new Date(Date.parse(validUntil));

    if ((isNaN(validUntilDate.getUTCDate())) ||
         (isNaN(createdAtDate.getUTCDate())))
      throw new Error('Impossible to set an object Session. Invalid format of date');

    this.set(id, token, validUntilDate, createdAtDate, userId, agencyId)
  }

  /**
   * Метод, устанавливающий данные класса из свойств в исходном формате
   * Входными параметрами являются все свойства класса в исходном формате
   */
  set(id: string, token: string, validUntil: Date, createdAt: Date, userId: string,
      agencyId: string) {
    if ((token.length <= this.minTokenLength) &&
        (token.length >= this.maxTokenLength))
      throw new Error('Impossible to set an object Session. Invalid format of token');

    this.id         = id;
    this.token      = token;
    this.validUntil = validUntil;
    this.createdAt  = createdAt;
    this.userId     = userId;
    this.agencyId   = agencyId;
  }
}
