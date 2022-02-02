import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-beer-view',
  templateUrl: './beer-view.component.html',
  styleUrls: ['./beer-view.component.css']
})
export class BeerViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  nro!: number;
  beer!: string;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("nro")!);
      this.beer = '';
      for (let x = 1; x <= 25; x++) {
        let t = x * this.nro;
        this.beer += t + '-';
      }
    })
  }

}
