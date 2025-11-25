import { Component, ChangeDetectorRef } from '@angular/core';
import { WeatherService } from './weather-service.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-weather-dashboard',
  imports: [],
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.css',
})
export class WeatherDashboard {
  constructor(private weatherService: WeatherService, private cdr: ChangeDetectorRef) {}

  weatherData: any = null

  getWeather(city: string) {
    this.getGeoLocation(city).subscribe((data) => {
      this.weatherData = data;
      // Need to add this to ensure the changes are detected. For some reason the template does not render
      // with the data without this from api call without this. Will need to click the button twice to get the data to render.
      this.cdr.detectChanges();
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
