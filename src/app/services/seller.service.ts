import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../shared/Constants';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  getSeller(id: any) {
    return this.http.get(
      Constants.apiEndPoint.seller.getSeller.replace(':id', id)
    );
  }

  updateSellerInfo(id: any, data: any) {
    return this.http.put(
      Constants.apiEndPoint.seller.updateSellerInfo.replace(':id', id),
      data
    );
  }

  updateSellerPassword(id: any, data: any) {
    return this.http.put(
      Constants.apiEndPoint.seller.updateSellerPassword.replace(':id', id),
      data
    );
  }
}
