import { Component } from '@angular/core';
import { WeatherService } from './weather-service.service';

@Component({
  selector: 'app-weather-dashboard',
  imports: [],
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.css',
})


export class WeatherDashboard {

  constructor(private weatherService: WeatherService) { }

  getGeoLocation(city:string) {
    this.weatherService.getGeoLocation(city).subscribe((data) => {
      console.log(data);
    });
  }
}
