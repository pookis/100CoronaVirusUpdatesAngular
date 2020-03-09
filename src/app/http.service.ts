import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get("http://newsapi.org/v2/everything?qInTitle=coronavirus&pageSize=100&language=en&?qInTitle=corona&qInTitle=corona&sortby=publishedAt&apiKey=cd56dfba6efd49fca9d496d0cd2725b1")
  }

}
