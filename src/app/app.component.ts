import { Component, OnInit } from '@angular/core';

export class PrimeCar {
  constructor(public vin?, public year?, public brand?, public color?) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  car: PrimeCar = new PrimeCar('vin', 2017, 'google', 'white');

  ngOnInit() {

  }

  save() {
    console.log('save() called');
  }

  delete() {
    console.log('delete() called');
  }
}
