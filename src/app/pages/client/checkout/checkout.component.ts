import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  total: number = 0;

  constructor() {}

  ngOnInit(): void {
    const subtotal = history.state.subtotalFromShoppingCart;
    this.total = subtotal;
  }
}
