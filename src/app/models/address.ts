export class Address {
  id: number;
  city: string;
  zipcode: string;
  streetNber: string;
  street: string;
  country: string;

  constructor() {
  }
  public setCityAddress(city: string): void {
    this.city = city;
  }
  public getCityAddress(): string {
    return this.city;
  }
}
