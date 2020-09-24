import {Pipe, PipeTransform} from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filterUsers'
})

export class FilterUsers implements PipeTransform{

  transform(lists: User[], search: string): any[] {
    if(!search) return lists;
    if(!lists) return [];

    return lists.filter(x=>
      x.role==search
    )
  }

}
