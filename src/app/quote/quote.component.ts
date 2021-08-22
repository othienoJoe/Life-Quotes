import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Dolly Parton', 'The way I see it if you want the Rainbow you gotta put up with the rain'),
    new Quote(2, 'Mae West', ''),
    new Quote(3, 'Thomas A. Edison', ''),
    new Quote(4, 'Seneca', ''),
    new Quote(5, 'Will Smith', ''),
    new Quote(6, 'Steve Jobs', ''),
    new Quote(7, 'Morris West', ''),
  ];

  toggleDetails(index:any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete:any, index:any) {
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
