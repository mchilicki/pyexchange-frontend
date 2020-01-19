import { Pipe, PipeTransform } from '@angular/core';
import { NavItem } from '../models/infrastructure/nav-item';

@Pipe({
  name: 'visible'
})
export class VisiblePipe implements PipeTransform {

  transform(items: NavItem[]): NavItem[] {
    if (!items) {
      return items;
    }

    return items.filter(x => x.visible);
  }

}
