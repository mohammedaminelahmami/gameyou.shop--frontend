import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {}

  products: any[] = [];

  ngOnInit(): void {
    this.getAllProductsStore();
  }

  getAllProductsStore() {
    const pageAndSize = new FormData();
    pageAndSize.append('page', '1');
    pageAndSize.append('size', '10');

    this.productService
      .getAllStoreProduct(pageAndSize, this.authService.decodeJWT().idStore)
      .subscribe(
        (response: any) => {
          this.products = response;
          console.log('response : ', response);
        },
        (error: any) => {
          console.log('error : ', error);
        }
      );
  }

  showModal: boolean = false;
  idProduct: any;

  toggleModal(action: boolean, idProduct: any) {
    this.showModal = action;
    this.idProduct = idProduct;
  }

  confirmDelete() {
    this.productService.deleteProduct(this.idProduct).subscribe(
      (response: any) => {
        this.getAllProductsStore();
        this.showModal = false;
        console.log('response : ', response);
      },
      (error: any) => {
        this.showModal = false;
        console.log('error : ', error);
      }
    );
  }
}
