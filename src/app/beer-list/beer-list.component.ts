import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  articles: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://api.punkapi.com/v2/beers")
    .subscribe(
      result => {
        this.articles = result;
      }
    )
  }

}
