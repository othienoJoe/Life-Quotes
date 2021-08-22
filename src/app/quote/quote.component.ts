import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:new Quote(0, "", "", "", "", new Date(), 0, 0);
  @Output() add = new EventEmitter<Quote>();

  // toggleDetails(index:any) {
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
  // }

  addQuote() {
    this.add.emit(this.quotes);
    this.quotes = new Quote(0, "", "", "", "", new Date(), 0, 0);
  }
  constructor() { }

  ngOnInit() {
  }

}
