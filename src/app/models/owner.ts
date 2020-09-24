import { Good } from './good';
import { User } from './user';

export class Owner extends User {
    phoneNumberPro: string;
    listOwnedGoods: Good[];
}
