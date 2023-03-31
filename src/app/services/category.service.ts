import { Constants } from './../shared/Constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCategory(data: FormData) {
    return this.http.post(Constants.apiEndPoint.category.addCategory, data);
  }

  deleteCategory(id: any) {
    return this.http.delete(
      Constants.apiEndPoint.category.deleteCategory.replace(':id', id)
    );
  }

  updateCategory(data: any, id: any) {
    return this.http.put(
      Constants.apiEndPoint.category.updateCategory.replace(':id', id),
      data
    );
  }

  getOneCategory(id: any) {
    return this.http.get(
      Constants.apiEndPoint.category.getOneCategory.replace(':id', id)
    );
  }

  getAllCategory() {
    return this.http.get(Constants.apiEndPoint.category.getAllCategory);
  }
}
