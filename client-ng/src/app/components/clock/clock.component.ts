import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  time = new Date();

  constructor() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnInit(): void {}

  formatHoursTo12(): number {
    return this.time.getHours() % 12 || 12;
  }

  formatAmPm(): string {
    return this.time.getHours() < 12 ? 'AM' : 'PM';
  }
}
