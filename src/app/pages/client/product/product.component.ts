import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: any = {};
  quantity: number = 1;
  categoryName: string = 'noName';

  constructor(private snackBar: MatSnackBar) {}

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
    this.showNotification();
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
        description: this.product.description,
        categoryName: this.categoryName,
      };
      cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  showNotification() {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
    <div class="absolute top-0 right-0 m-24 bg-primary py-2 px-4 rounded-lg shadow-md">
      <p class="text-white font-medium">Product added to cart! </p>
    </div>
  `;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}
