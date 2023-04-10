import { Constants } from './../shared/Constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addProduct(data: FormData) {
    return this.http.post(Constants.apiEndPoint.product.addProduct, data);
  }

  deleteProduct(id: any) {
    return this.http.delete(
      Constants.apiEndPoint.product.deleteProduct.replace(':id', id)
    );
  }

  updateProduct(data: any, id: any) {
    return this.http.put(
      Constants.apiEndPoint.product.updateProduct.replace(':id', id),
      data
    );
  }

  getOneProduct(id: any) {
    return this.http.get(
      Constants.apiEndPoint.product.getOneProduct.replace(':id', id)
    );
  }

  getAllProduct(pageAndSize: any) {
    return this.http.get(
      Constants.apiEndPoint.product.getAllProduct,
      pageAndSize
    );
  }

  getAllStoreProduct(pageAndSize: any, idStore: any) {
    return this.http.get(
      Constants.apiEndPoint.product.getAllStoreProduct.replace(':id', idStore),
      pageAndSize
    );
  }

  getAllCategoryProduct(pageAndSize: any, idProduct: any) {
    return this.http.get(
      Constants.apiEndPoint.product.getAllCategoryProduct.replace(
        ':id',
        idProduct
      ),
      pageAndSize
    );
  }
}
