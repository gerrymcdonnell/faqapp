import { Injectable } from '@angular/core';

//import question obj
import {Question} from '../models/Question'

@Injectable()
export class DataService {

  //array of objects
  questions:Question[];

  constructor() {
    this.questions=
    [
      {
        text:"what is ur name",
        answer:"ged",
        hide:true
      },
      {
        text:"what is ur name2",
        answer:"ged2",
        hide:true
      }
    ];
   }//

   getQuestions(){
     return this.questions;
   }

}
