import { Quote } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote | undefined;
  @Output() isComplete = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

}
