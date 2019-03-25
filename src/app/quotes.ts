export class Quotes {
  public thumbsUp:number;
  public thumbsDown:number;
   public showDescription:boolean;
  constructor(public id:number, public name:string,public userQuote:string,public description:string, public completeDate:Date){
     this.showDescription=false;
     this.thumbsUp=0;
     this.thumbsDown=0;
  }
}
