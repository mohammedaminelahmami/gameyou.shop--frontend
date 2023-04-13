import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../shared/Constants';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getClient(id: any) {
    return this.http.get(
      Constants.apiEndPoint.client.getClient.replace(':id', id)
    );
  }

  updateClientInfo(data: any, id: any) {
    return this.http.put(
      Constants.apiEndPoint.client.updateClientInfo.replace(':id', id),
      data
    );
  }

  updateClientPassword(data: any, id: any) {
    return this.http.put(
      Constants.apiEndPoint.client.updateClientPassword.replace(':id', id),
      data
    );
  }
}
