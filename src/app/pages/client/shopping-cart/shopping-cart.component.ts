import { Router, NavigationExtras } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  constructor(private router: Router) {}

  cart = JSON.parse(localStorage.getItem('cart') || '[]');
  subtotal: number = this.cart.reduce(
    (a: any, b: any) => a + b.price * b.quantity,
    0
  );

  goToProductPage() {
    const navigationExtras: NavigationExtras = {
      state: {
        productFromPreviousPage: 'product',
      },
    };
    this.router.navigate(['/product'], navigationExtras);
  }

  goTocheckoutPage() {
    if (this.cart.length == 0) {
      alert('You have no item in your cart!');
      return;
    }

    if (!localStorage.getItem('accessToken')) {
      this.router.navigate(['/login']);
      return;
    }

    const navigationExtras: NavigationExtras = {
      state: {
        subtotalFromShoppingCart: this.subtotal,
      },
    };
    this.router.navigate(['/checkout'], navigationExtras);
  }

  increaseQuantity(idx: number) {
    this.cart[idx].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.subtotal = this.cart.reduce(
      (a: any, b: any) => a + b.price * b.quantity,
      0
    );
  }

  decreaseQuantity(idx: number) {
    if (this.cart[idx].quantity > 1) {
      this.cart[idx].quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    this.subtotal = this.cart.reduce(
      (a: any, b: any) => a + b.price * b.quantity,
      0
    );
  }

  removeItemFromCart(idx: number) {
    this.cart.splice(idx, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.subtotal = this.cart.reduce(
      (a: any, b: any) => a + b.price * b.quantity,
      0
    );
  }
}
