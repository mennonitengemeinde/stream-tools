import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-page',
  templateUrl: './clock-page.component.html',
  styleUrls: ['./clock-page.component.scss'],
})
export class ClockPageComponent implements OnInit {
  time: Date = new Date();

  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnInit(): void {}
}
