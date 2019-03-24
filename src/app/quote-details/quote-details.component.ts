import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import{Quotes} from '../quotes'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quotes;
  constructor() { }
  @Output() isComplete= new EventEmitter<boolean>();

goalComplete(complete:boolean){
  this.isComplete.emit(complete);
}
  ngOnInit() {
  }

}
