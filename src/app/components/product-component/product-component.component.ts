import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
})
export class ProductComponentComponent implements OnInit {
  @Input() product: any;
  @Input() index: any;
  checkFavorite: boolean[] = [];

  constructor(private router: Router, private cdf: ChangeDetectorRef) {}

  ngOnInit(): void {
    const favorite = JSON.parse(localStorage.getItem('favorite') || '[]');
    if (favorite.find((item: any) => item.id == this.product.id)) {
      this.checkFavorite[this.index] = true;
    } else {
      this.checkFavorite[this.index] = false;
    }
  }

  goToProductPage() {
    const navigationExtras: NavigationExtras = {
      state: {
        productFromPreviousPage: this.product,
      },
    };
    this.router.navigate(['/product'], navigationExtras);
  }

  addProductToFavorite(idx: number) {
    this.checkFavorite[idx] = !this.checkFavorite[idx];
    if (this.checkFavorite[idx]) {
      const favorite = JSON.parse(localStorage.getItem('favorite') || '[]');
      if (favorite.find((item: any) => item.id == this.product.id)) {
        return;
      } else {
        const product = {
          id: this.product.id,
          name: this.product.name,
          price: this.product.price,
          title: this.product.title,
        };
        favorite.push(product);
      }
      localStorage.setItem('favorite', JSON.stringify(favorite));
    } else {
      const favorite = JSON.parse(localStorage.getItem('favorite') || '[]');
      const index = favorite.findIndex(
        (item: any) => item.id == this.product.id
      );
      favorite.splice(index, 1);
      localStorage.setItem('favorite', JSON.stringify(favorite));
      this.cdf.detectChanges();
    }
  }
}
