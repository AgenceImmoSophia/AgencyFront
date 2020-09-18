import {Address} from './address';
import {TypeOfGood} from './typeOfGood';
import {Status} from './Status';

export class Good {
  id: number;
  nameOfGood: string;
  typeOfGood: TypeOfGood;
  status: Status;
  price: number;
  address: Address;
  area: number;
}
