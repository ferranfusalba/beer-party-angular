import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
  selector: 'app-beer-view',
  templateUrl: './beer-view.component.html',
  styleUrls: ['./beer-view.component.css']
})
export class BeerViewComponent implements OnInit {
  articles: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private _location: Location) { }
  nro!: number;
  beer!: string;
  nro1!: number;
  nro2!: number;
  ngOnInit(): void {
    this.http.get("https://api.punkapi.com/v2/beers")
    .subscribe(
      result => {
        this.articles = result;
      },
    ),
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("nro")!) + 1;
      this.beer = '';
      this.nro1 = this.nro - 1;
      this.nro2 = this.nro - 2;
    },
    )
  }

  previous() {
    this._location.back();
  }

}
