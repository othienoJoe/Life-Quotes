import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'Abraham Lincoln'},
    {id:2, name:'Abraham Lincoln'},
    {id:3, name:'Abraham Lincoln'},
    {id:4, name:'Abraham Lincoln'},
    {id:5, name:'Abraham Lincoln'},
    {id:6, name:'Abraham Lincoln'},
    {id:7, name:'Abraham Lincoln'},
  ];
}
