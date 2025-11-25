import { Component } from '@angular/core';
import { SearchService } from '../search-service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})

export class SearchBar {
  constructor(private searchService: SearchService) { }

  users: any[] = [];

  searchControl = new FormControl('');

  getData(query:string) {
    return this.searchService.getData(query).subscribe((data) => {
      this.users = data.items;
      console.log(data.items);
    })
  }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe((value) => {
      if (value) {
        this.searchService.getData(value).subscribe(data => {
          console.log(data.users);
          this.users = data.users;
        })
    }
  });
  }
}
