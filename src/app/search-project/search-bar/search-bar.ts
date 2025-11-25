import { Component } from '@angular/core';
import { SearchService } from '../search-service';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})

export class SearchBar {
  constructor(private searchService: SearchService) { }

  getData(query:string) {
    return this.searchService.getData(query).subscribe((data) => {
      console.log(data);
    })
  }

}
