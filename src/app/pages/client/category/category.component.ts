import { CategoryService } from './../../../services/category.service';
import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  categoryId: any = localStorage.getItem('idCategory') || -1;
  category: any = {};
  products: any = [];

  isRefresh: boolean = false;

  ngOnInit(): void {
    this.getOneCategory();
    this.getAllProductsCategory();
  }

  getOneCategory() {
    this.categoryService.getOneCategory(this.categoryId).subscribe(
      (response: any) => {
        this.category = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getEmittedValue(categoryIdFromChild: any) {
    this.categoryId = categoryIdFromChild;
    this.getOneCategory();
    this.getAllProductsCategory();
  }

  getAllProductsCategory() {
    const formData = new FormData();
    formData.append('page', '0');
    formData.append('size', '12');

    this.productService
      .getAllCategoryProduct(formData, this.categoryId)
      .subscribe(
        (response: any) => {
          // console.log(response);
          this.products = response;
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
}
