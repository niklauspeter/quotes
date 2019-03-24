import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quotes = [
  new Quotes(1,'There is nothing permanent except change','Find an online version and watch merlin find his son','Heraclitus',new Date(2018,3,14) ),
  new Quotes(2,'You cannot shake hands with a clenched fist','I have to buy cookies for the parrot','Indira Gandthi',new Date(2018,6,9) ),
  new Quotes(3, 'Learning never exhausts the mind','Diana has her birthday coming up soon','Leonardo da Vinci',new Date(2018,1,12) ),
  new Quotes(4, 'If you cannot do great things do small things in a great way','Pupper likes expensive sancks', 'Napoleon Hill',new Date(2018,0,18) ),
  new Quotes(5, 'The supreme art of war is to subdue your enemy without fighting','Damn math', 'Sun Tzu',new Date(2018,2,14) ),
  new Quotes(6, 'You cannot blame gravity for falling in love',' am an evil overlord','ALbert Einstein',new Date(2018,3,14) ),
    ]
    toogleDetails(index){
       this.quotes[index].showDescription = !this.quotes[index].showDescription;
   }
   deleteQuote(isComplete,index){
       if (isComplete){
         let toDelete= confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
         if(toDelete){

           this.quotes.splice(index,1);
         }
       }
    }

    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)
      }

    constructor() { }

  ngOnInit() {

}
}
