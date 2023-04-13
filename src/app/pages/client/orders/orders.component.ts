import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  currentUser: any = JSON.parse(localStorage.getItem('currentUser') || '{}');
  constructor(private orderService: OrderService) {}
  orders: any = [];

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.getAllClientOrder();
  }

  getAllClientOrder() {
    let idClient = this.currentUser.id;
    this.orderService.getAllClientOrder(idClient).subscribe(
      (res) => {
        this.orders = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
