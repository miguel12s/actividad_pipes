import { Component } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad-pipes';
  name="miguel angel suarez plata"
  nameCat="peluche"
  birthday = new Date(2023, 3,8);
  power = 5;
  factor = 1;
  message$!: Observable<string>;
  x=888.88  
  y= 999.99999;
  product={
    id:1,
    name:'tomate'
  }
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() { this.resend(); }

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

  birthday2 = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
