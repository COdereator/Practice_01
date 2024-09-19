import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpDataServiceService {

  apiPath = "https://jsonplaceholder.typicode.com/users";

  constructor(private _httpClient:HttpClient) { }
  
  getUsersData() {
    return this._httpClient.get(this.apiPath);  
  }
}
