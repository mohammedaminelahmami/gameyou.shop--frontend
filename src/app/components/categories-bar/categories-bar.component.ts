import { SharedService } from './../../services/shared.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.css'],
})
export class CategoriesBarComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
  }
  randomNumber = Math.floor(Math.random() * 100);
  categories: any[] = [];

  @Output() valueEmitter = new EventEmitter<any>();

  emitValue(idCategory: any) {
    this.valueEmitter.emit(idCategory);
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(
      (response: any) => {
        // console.log('response => : ', response);
        this.categories = response;
      },
      (error: any) => {
        console.log('error => : ', error);
      }
    );
  }
}
