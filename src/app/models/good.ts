import {Address} from './address';
import {TypeOfGood} from './typeOfGood';

export class Good {
  id: number;
  nameOfGood: string;
  typeOfGood: string;
  status: string;
  price: number;
  address: Address;
  area: number;

  constructor() {
  }
}
