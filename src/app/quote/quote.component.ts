import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Abraham Lincoln', description:''},
    {id:2, name:'Abraham Lincoln', description:''},
    {id:3, name:'Abraham Lincoln', description:''},
    {id:4, name:'Abraham Lincoln', description:''},
    {id:5, name:'Abraham Lincoln', description:''},
    {id:6, name:'Abraham Lincoln', description:''},
    {id:7, name:'Abraham Lincoln', description:''},
  ];

  constructor() { }

  ngOnInit() {
  }

}
