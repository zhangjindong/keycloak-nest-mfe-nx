import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thousands',
})
export class ThousandsPipe implements PipeTransform {
  transform(value: any = 0, prefix = '¥', suffix = '', precision = 2): any {
    try {
      if (
        value === null ||
        value === undefined ||
        (typeof value === 'string' && value.trim() === '')
      )
        return null;
      let str = Number(value).toFixed(precision).toString();
      str = str.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
      return prefix + str + suffix;
    } catch (err) {
      console.log(err);
      return prefix + '0.00';
    }
  }
}
