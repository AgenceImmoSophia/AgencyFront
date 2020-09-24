import {Pipe, PipeTransform} from '@angular/core';
import { Good } from '../models/good';

@Pipe({
  name: 'filterGoods',
  pure:false
})

export class filterGoods implements PipeTransform{

  transform(lists: Good[], search: string): any[] {
    if(!search) return lists;
    if(!lists) return [];


    return lists.filter(x=>
      x.code==search
    )
  }
}
