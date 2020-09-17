import {Address} from './address';
import {TypeOfGood} from './typeOfGood';

export class Good {
  id: number;
  nameOfGood: string;
  type: string;
  price: number;
  address: Address;
  area: number;

  constructor() {
  }
}
