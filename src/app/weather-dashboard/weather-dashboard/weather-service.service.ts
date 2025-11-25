import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import apiKeys from '../../../api-keys.json';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private apiKey = apiKeys.API_KEY;
  
  private apiGeoUrl = "http://api.openweathermap.org/geo/1.0/direct"

  constructor(private http: HttpClient) { }
  
  getGeoLocation(city:string) {
    
    const url = `${this.apiGeoUrl}?q=${city}&limit=5&appid=${this.apiKey}`
    return this.http.get(url);
  }

}
