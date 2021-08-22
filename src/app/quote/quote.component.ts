import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Abraham Lincoln', ''),
    new Quote(2, 'Abraham Lincoln', ''),
    new Quote(3, 'Abraham Lincoln', ''),
    new Quote(4, 'Abraham Lincoln', ''),
    new Quote(5, 'Abraham Lincoln', ''),
    new Quote(6, 'Abraham Lincoln', ''),
    new Quote(7, 'Abraham Lincoln', ''),
  ];

  toggleDetails(index:any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
