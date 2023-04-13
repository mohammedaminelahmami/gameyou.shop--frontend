import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderInterface } from 'src/app/interfaces/OrderInterface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  total: number = 0;
  cart = JSON.parse(localStorage.getItem('cart') || '[]');
  currentUser: any = JSON.parse(localStorage.getItem('currentUser') || '{}');
  isLoading: boolean = false;
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    const subtotal = history.state.subtotalFromShoppingCart;
    this.total = subtotal;
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  placeOrder() {
    this.isLoading = true;
    let order: OrderInterface = {
      clientId: this.currentUser.id,
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
        setTimeout(() => {
          this.isLoading = false;
          this.showModal = true;
        }, 2000);
        console.log('res : ', res);
        localStorage.removeItem('cart');
      },
      (err) => {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
        console.log('err : ', err);
      }
    );
  }

  formGroupInfoOrder = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    shippingAddress: new FormControl(''),
  });

  submitInfoOrder(formGroupInfoOrder: any) {}

  showModal: boolean = false;
  toggleShowModal(check: boolean) {
    this.showModal = check;
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
