import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'Abraham Lincoln', description:''},
    {id:2, name:'Abraham Lincoln', description:''},
    {id:3, name:'Abraham Lincoln', description:''},
    {id:4, name:'Abraham Lincoln', description:''},
    {id:5, name:'Abraham Lincoln', description:''},
    {id:6, name:'Abraham Lincoln', description:''},
    {id:7, name:'Abraham Lincoln', description:''},
  ];
}
