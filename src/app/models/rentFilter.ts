import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rentFilter'
})
export class RentFilter implements PipeTransform {
  transform(goods: any, codeToFind: any): any {
    if (codeToFind === undefined) {
      return goods;
      // tslint:disable-next-line:only-arrow-functions no-shadowed-variable typedef
      return goods.filter(function(goods) {
        for (const property in goods) {
          if (goods[property] === null) {
            continue;
          }
          if (goods[property].toString().toLowerCase().includes(codeToFind.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
    }
  }
}
