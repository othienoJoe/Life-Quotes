import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Dolly Parton', 'The way I see it,if you want the Rainbow,you gotta put up with the rain'),
    new Quote(2, 'Mae West', 'You only live once,but if you do it right,once is enough'),
    new Quote(3, 'Thomas A. Edison', 'Many of life failures are people who did not realise how close they were to success when they gave up'),
    new Quote(4, 'Seneca', 'Not how long,but how well you have lived is the main thing'),
    new Quote(5, 'Will Smith', 'Money and success dont change people;they merely amplify what is already there'),
    new Quote(6, 'Steve Jobs', 'Your time is limited,so dont waste it living someone else life.Dont be tracked by <m>Dogma</m> - which is living with the results of other people s thinking'),
    new Quote(7, 'Morris West', 'If you spend your whole life waiting for the storm,you will never enjoy the sunshine'),
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
