import {Address} from './address';
import {Good} from './good';

export class User {
  id: number;
  name: string;
  phoneNumberPers: string;
  address: Address;
  role: string;
  phoneNumberPro: string;
  username: string;
  password: string;
  listCode: string[];
  listDesiredGoods: Good[];


  constructor(){}

}
