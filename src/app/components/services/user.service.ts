import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const configUrl="https://randomuser.me/api/"
const configUrl2="https://api.fungenerators.com/name/categories.json"

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private httpClient:HttpClient
  ) { } 
  getUserInfo(){
    return this.httpClient.get<{results:any}>(configUrl);
  }
  getRandomNames(){
    return this.httpClient.get<{contents:any[],success:any}>(configUrl2)
  }
}
