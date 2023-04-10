import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
})
export class ProductComponentComponent {
  @Input() product: any;

  constructor(private router: Router) {}

  goToProductPage() {
    const navigationExtras: NavigationExtras = {
      state: {
        productFromPreviousPage: this.product,
      },
    };
    this.router.navigate(['/product'], navigationExtras);
  }
}
