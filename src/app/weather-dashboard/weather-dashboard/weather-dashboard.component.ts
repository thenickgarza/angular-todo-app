import { Component, ChangeDetectorRef } from '@angular/core';
import { WeatherService } from './weather-service.service';
import { switchMap, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-dashboard',
  imports: [CommonModule], // Need to import CommonModule for async pipe.
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.css',
})


export class WeatherDashboard {
  constructor(private weatherService: WeatherService, private cdr: ChangeDetectorRef) {}

  weatherData$: Observable<any> | null = null

  getGeoLocation(city: string) {
    return this.weatherService.getGeoLocation(city)
  }

  getWeather(city: string) {
    this.weatherData$ = this.getGeoLocation(city).pipe(
      switchMap((data: any[]) => {
        return this.weatherService.getWeather(data[0].lat, data[0].lon);
      })
    )
  }

}
