import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task3';
  users= [
    {'Id':1,'Name':'Krish','location':'hyderabad'},
    {'Id':2,'Name':'Laxman','location':'bangalore'},
    {'Id':3,'Name':'Santosh','location':'hyderabad'},
    {'Id':4,'Name':'Mahesh','location':'bangalore'},
    {'Id':5,'Name':'Dinesh','location':'hyderabad'},
    {'Id':6,'Name':'Suresh','location':'bangalore'}
  ]
}

