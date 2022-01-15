import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    (this.fullName = fullName), (this.genre = genre);
  }

  toString() {
    console.log(`/n full name: ${this.fullName} /n ${this.genre}`);
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Simon Diaz', 'Flokloric'),
      new Composer('Juan Vicente Torrealba', 'Popular'),
      new Composer('Ali Primera', 'Popular'),
      new Composer('Lasso', 'Popular'),
      new Composer('Gustavo Dudamel', 'Classic'),
    ];
  }

  ngOnInit(): void {}
}
