import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class SearchService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://dummyjson.com/users/search?q="

  getData(query:string) {
    const url = `${this.baseUrl}${query}`
    return this.http.get<any>(url);
  }
  
}
