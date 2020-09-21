import { EstateAgent } from './estateAgent';
import {Good} from './good';
import {User} from './user';

export class Contract {
  id: number;
  price: number;
  date: Date;
  good: Good;
  estateAgent: EstateAgent;
  client: User;

  constructor(){}

}
