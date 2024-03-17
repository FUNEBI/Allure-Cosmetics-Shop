import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArraypipe'
})
export class ObjectToArraypipePipe implements PipeTransform {

  transform = (objects: any = []) => {
    return Object.values(objects);
  }
}


