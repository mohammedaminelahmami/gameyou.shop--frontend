import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from './../../../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-orders',
  templateUrl: './store-orders.component.html',
  styleUrls: ['./store-orders.component.css'],
})
export class StoreOrdersComponent implements OnInit {
  currentUser: any = JSON.parse(localStorage.getItem('currentUser') || '{}');
  constructor(private orderService: OrderService) {}
  orders: any = [];

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.getAllClientOrder();
  }

  getAllClientOrder() {
    let idStore = this.currentUser.idStore;
    this.orderService.getAllSellerOrder(idStore).subscribe(
      (res) => {
        this.orders = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  formGroupStatus: FormGroup = new FormGroup({
    orderStatus: new FormControl('', [Validators.required]),
  });

  updateStatus(formGroupStatusValue: any, orderId: any) {
    this.orderService
      .updateStatus(formGroupStatusValue.orderStatus, orderId)
      .subscribe(
        (res) => {
          console.log(res);
          this.getAllClientOrder();
          this.formGroupStatus.reset();
        },
        (err) => {
          this.getAllClientOrder();
          console.log(err);
        }
      );
  }
}
