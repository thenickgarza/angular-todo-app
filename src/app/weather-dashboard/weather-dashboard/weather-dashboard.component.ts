import { Component } from '@angular/core';
import { WeatherService } from './weather-service.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-weather-dashboard',
  imports: [],
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.css',
})
export class WeatherDashboard {
  constructor(private weatherService: WeatherService) {}

  getWeather(city: string) {
    this.getGeoLocation(city).subscribe((data) => {
      console.log(data);
    });
  }

  getGeoLocation(city: string) {
    return this.weatherService.getGeoLocation(city).pipe(
      switchMap((data: any[]) => {
        return this.weatherService.getWeather(data[0].lat, data[0].lon);
      })
    );
  }
}
