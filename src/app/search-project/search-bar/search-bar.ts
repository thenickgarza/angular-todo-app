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

  users: any[] = [];

  getData(query:string) {
    return this.searchService.getData(query).subscribe((data) => {
      this.users = data.items;
      console.log(data.items);
    })
  }

}
