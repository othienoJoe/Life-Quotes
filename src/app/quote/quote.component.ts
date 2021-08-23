import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Favorite Quotes To The Author';
  quotes:Quote[] = [
    new Quote (1,'Nick Joe','Human spirit','The way I see it,if you want the Rainbow,you gotta put up with the rain','Dolly Parton', new Date(2021,7,17),0,0),
    new Quote (2,'Kinoti','Technology … ','Many of life failures are people who did not realise how close they were to success when they gave up','Max Frisch',new Date(2021,7,19),0,0),
    new Quote (3,'Chuxx','The Great Myth','Not how long,but how well you have lived is the main thing.','Seneca',new Date(2021,6,3),0,0),
    new Quote (4,'Saul Ngeresa','Personality','Money and success dont change people;they merely amplify what is already there.','Will Smith',new Date(2021,7,5),0,0),
    new Quote (5,'Jeffrey','Code And People','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2021,7,20),0,0),
    new Quote (6,'John Kimani','Tech And Life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2021,7,15),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }

    }
  }

  displayInfo(index: any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
