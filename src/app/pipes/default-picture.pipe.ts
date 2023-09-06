import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultPicture'
})
export class DefaultPicturePipe implements PipeTransform {

  transform(value: string, default_img:string): string {
    if (value=="")
    {

      return default_img;
    }
    return value;
  }

}
