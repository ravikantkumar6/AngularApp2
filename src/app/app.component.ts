import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Management System';
  heading = 'This is dynamic Heading';
  times = new Date();
  constructor() {
    setInterval(() => {
      this.times = new Date();
    }, 1);
}
}
