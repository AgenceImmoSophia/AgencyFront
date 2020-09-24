import {Address} from './address';
import {Owner} from './owner';




export class Good {
  id: number;
  nameOfGood: string;
  typeOfGood: string;
  status: string;
  price: number;
  address: Address;
  area: number;
  code: string;

  owner: Owner;


  constructor(){}

}
