export class Quotes {
   public showDescription:boolean;
  constructor(public id:number, public name:string,public userQuote:string,public description:string, public completeDate:Date){
     this.showDescription=false
  }
}
