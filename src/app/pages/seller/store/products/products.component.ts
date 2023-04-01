import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  editFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  getOneProduct(idProduct: any) {
    this.productService.getOneProduct(idProduct).subscribe(
      (response: any) => {
        // console.log('response : ', response);
        this.editFormGroup.patchValue({
          name: response.name,
          title: response.title,
          description: response.description,
          quantity: response.quantity,
          price: response.price,
        });
      },
      (error: any) => {
        console.log('error : ', error);
      }
    );
  }

  updateProduct(data: any) {
    console.log(data);
    this.productService.updateProduct(data, this.idProduct).subscribe(
      (response: any) => {
        this.getAllProductsStore();
        console.log('response : ', response);
        this.toggleEditModal(!this.showEditModal, -1);
      },
      (error: any) => {
        this.toggleEditModal(!this.showEditModal, -1);
        console.log('error : ', error);
      }
    );
  }

  showDeleteModal: boolean = false;
  showEditModal: boolean = false;
  idProduct: any;

  toggleEditModal(action: boolean, idProduct: any) {
    if (idProduct != -1) this.getOneProduct(idProduct);
    this.showEditModal = action;
    this.idProduct = idProduct;
  }

  toggleDeleteModal(action: boolean, idProduct: any) {
    this.showDeleteModal = action;
    this.idProduct = idProduct;
  }

  confirmDelete() {
    this.productService.deleteProduct(this.idProduct).subscribe(
      (response: any) => {
        this.getAllProductsStore();
        this.showDeleteModal = false;
        console.log('response : ', response);
      },
      (error: any) => {
        this.showDeleteModal = false;
        console.log('error : ', error);
      }
    );
  }
}
