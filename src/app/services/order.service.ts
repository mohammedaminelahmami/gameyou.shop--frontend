import { Constants } from './../shared/Constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  saveOrder(data: any) {
    return this.http.post(Constants.apiEndPoint.order.addOrder, data);
  }
}
