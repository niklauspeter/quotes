import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes = [
  new Quotes(1,'Watch Finding Nemo','Find an online version and watch merlin find his son',new Date(2018,3,14) ),
  new Quotes(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2018,6,9) ),
  new Quotes(3, 'Get new Phone Case','Diana has her birthday coming up soon',new Date(2018,1,12) ),
  new Quotes(4, 'Get Dog Food','Pupper likes expensive sancks',new Date(2018,0,18) ),
  new Quotes(5, 'Solve math homework','Damn Math',new Date(2018,2,14) ),
  new Quotes(6, 'Plot my world domination plan','Cause I am an evil overlord',new Date(2018,3,14) ),
    ]
    constructor() { }

  ngOnInit() {
  }

}
