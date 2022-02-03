import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  valor: number=1;
  constructor() { }

  ngOnInit(): void {
    this.valor = Math.trunc(Math.random() * 6) + 1;
  }

}
