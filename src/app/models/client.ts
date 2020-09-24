import { Good } from './good';
import { User } from './user';

export class Client extends User{
  listCode: string[];
  listDesiredGoods: Good[];
}
