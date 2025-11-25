import { Component } from '@angular/core';
import { SearchService } from '../search-service';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, filter, catchError} from 'rxjs/operators';
import { of } from 'rxjs';

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
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(query => query ? query.length >= 2 : false),
      switchMap(query => this.searchService.getData(query as string)),
      catchError(error => {
        console.log('Error:', error)
        return of({ items: []})
      })
    ).subscribe(data => {
      console.log(data);
      this.users = data.results
    })
  }
}
