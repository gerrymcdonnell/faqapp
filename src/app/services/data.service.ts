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
        text:"Capital of england?",
        answer:"london",
        hide:true
      },
      {
        text:"Where is the city of paris?",
        answer:"France",
        hide:true
      }
    ];
   }//

   getQuestions(){
     return this.questions;
   }

   /*
   note push adds to the end
   unshift andds to the start
   */
   addQuestion(question:Question){
     this.questions.unshift(question);
   }

}
