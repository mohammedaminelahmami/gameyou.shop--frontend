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

  getAllClientOrder(id: any) {
    return this.http.get(
      Constants.apiEndPoint.order.getAllOrderClient.replace(':id', id)
    );
  }

  getAllSellerOrder(id: any) {
    // by store id
    return this.http.get(
      Constants.apiEndPoint.order.getAllOrderSeller.replace(':id', id)
    );
  }

  updateStatus(orderStatus: string, orderId: any) {
    return this.http.put(
      Constants.apiEndPoint.order.updateStatus.replace(':id', orderId) +
        '?orderStatus=' +
        orderStatus,
      {}
    );
  }
}
