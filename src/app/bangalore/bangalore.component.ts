import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bangalore',
  templateUrl: './bangalore.component.html',
  styleUrls: ['./bangalore.component.css']
})
export class BangaloreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users= [
    {'Id':1,'Name':'Krish','location':'hyderabad'},
    {'Id':2,'Name':'Laxman','location':'bangalore'},
    {'Id':3,'Name':'Santosh','location':'hyderabad'},
    {'Id':4,'Name':'Mahesh','location':'bangalore'},
    {'Id':5,'Name':'Dinesh','location':'hyderabad'},
    {'Id':6,'Name':'Suresh','location':'bangalore'}
  ]
}
