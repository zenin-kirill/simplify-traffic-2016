export class Session {
  private id: string;
  private token: string;
  private validUntil: Date;
  private createdAt: Date;

  private userId: string;

  private readonly minTokenLength: number = 15;
  private readonly maxTokenLength: number = 50;

  constructor(sessionData: Object) {
    this.setOnObject(sessionData);
  }

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

  getId(): string {
    return this.id;
  }

  setOnObject(sessionData: any) {
    if ((sessionData['type'] === 'user-sessions') &&
        ('id' in sessionData) &&
        ('token' in sessionData['attributes']) &&
        ('valid-until' in sessionData['attributes']) &&
        ('created-at' in sessionData['attributes']) &&

        ('id' in sessionData['relationships']['user']['data'])) {

      this.setOnStrings(sessionData['id'].toString(),
                        sessionData['attributes']['token'].toString(),
                        sessionData['attributes']['valid-until'].toString(),
                        sessionData['attributes']['created-at'].toString(),

                        sessionData['relationships']['user']['data']['id'].toString())
    }
    else {
      throw new Error('Impossible to convert an object Session. Invalid object format');
    }
  }

  setOnStrings(id: string, token: string, validUntil: string, createdAt: string, userId: string) {
    let createdAtDate = new Date(Date.parse(createdAt));
    let validUntilDate = new Date(Date.parse(validUntil));

    if ((validUntilDate.getUTCDate() === NaN) ||
        createdAtDate.getUTCDate() === NaN)
      throw new Error('Impossible to set an object Session. Invalid format of date');

    this.set(id, token, validUntilDate, createdAtDate, userId)
  }

  set(id: string, token: string, validUntil: Date, createdAt: Date, userId: string) {
    if ((token.length <= this.minTokenLength) &&
        (token.length >= this.maxTokenLength))
      throw new Error('Impossible to set an object Session. Invalid format of token');

    this.id        = id;
    this.token     = token;
    this.validUntil = validUntil;
    this.createdAt = createdAt;
    this.userId = userId;
  }
}
