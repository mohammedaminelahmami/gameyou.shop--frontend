import { Component } from '@angular/core';
import { ProductService } from './../../../../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {}

  images: any[] = [];
  eventTargetImages: any[] = [];
  isLoading: boolean = false;

  addProductForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    categoryName: new FormControl('Type', [Validators.required]),
    images: new FormControl('', [Validators.required]),
  });

  saveProduct(data: any) {
    // loader start
    this.isLoading = true;
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('title', data.title);
    formData.append('quantity', data.quantity);
    formData.append('description', data.description);
    formData.append('price', data.price);
    formData.append('idStore', this.authService.decodeJWT().idStore);
    formData.append('categoryName', data.categoryName);
    for (let i = 0; i < this.eventTargetImages.length; i++) {
      formData.append('images', this.eventTargetImages[i]);
    }

    this.productService.addProduct(formData).subscribe(
      (response) => {
        console.log('response => : ', response);
        this.addProductForm.reset();
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.log('error => : ', error);
      }
    );
  }

  uploadProductImages(event: any) {
    if (event.target.files) {
      if (this.images.length + event.target.files.length <= 4) {
        for (let i = 0; File.length; i++) {
          const reader = new FileReader();
          reader.readAsDataURL(event.target.files[i]);
          this.eventTargetImages.push(event.target.files[i]);
          reader.onload = (event: any) => {
            this.images.push(event.target.result);
          };
        }
      } else {
        alert('max images (4)');
      }
    }
  }
}
