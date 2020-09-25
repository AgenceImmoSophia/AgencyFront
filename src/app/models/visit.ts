import {Good} from './good';
import {EstateAgent} from './estateAgent';
import {Client} from './client';

export class Visit {
  id: number;
  date: Date;
  good: Good;
  estateAgent: EstateAgent;
  client: Client;

  constructor() {
  }

}
