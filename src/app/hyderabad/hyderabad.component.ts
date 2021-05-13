import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hyderabad',
  templateUrl: './hyderabad.component.html',
  styleUrls: ['./hyderabad.component.css']
})
export class HyderabadComponent implements OnInit {

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
