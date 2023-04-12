import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { OrderInterface } from 'src/app/interfaces/OrderInterface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  total: number = 0;
  cart = JSON.parse(localStorage.getItem('cart') || '[]');

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const subtotal = history.state.subtotalFromShoppingCart;
    this.total = subtotal;
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  placeOrder() {
    let order: OrderInterface = {
      clientId: 1,
      storeId: 1,
      paymentType: 'paypal',
      orderProducts: [],
    };
    for (let i = 0; i < this.cart.length; i++) {
      let oneProduct = {
        id: this.cart[i].id,
        name: this.cart[i].name,
        price: this.cart[i].price,
        title: this.cart[i].title,
        description: this.cart[i].description,
      };
      order.orderProducts.push({
        quantity: this.cart[i].quantity,
        discount: 0,
        product: oneProduct,
      });
    }

    this.orderService.saveOrder(order).subscribe(
      (res) => {
        console.log('res : ', res);
        localStorage.removeItem('cart');
      },
      (err) => {
        console.log('err : ', err);
      }
    );
  }
}
