import { ProductService } from 'src/app/services/product.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: any = {};
  quantity: number = 1;

  constructor() {}

  ngOnInit() {
    const product = history.state.productFromPreviousPage;
    this.product = product;
  }

  increaseQuantity() {
    this.quantity += 1;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
  }

  addToCart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.find((item: any) => item.id == this.product.id)) {
      cart.find((item: any) => item.id == this.product.id).quantity +=
        this.quantity;
    } else {
      const product = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        quantity: this.quantity,
        title: this.product.title,
      };
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
