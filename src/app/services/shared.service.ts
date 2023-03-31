import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  item: any;

  getValueShared(): any {
    return this.item;
  }

  setValueShared(item: any): any {
    this.item = item;
  }
}
