import { Injectable } from '@angular/core';

//import question obj
import {Question} from '../models/Question'

@Injectable()
export class DataService {

  //array of objects
  questions:Question[];

  constructor() {
    /*
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
    ];*/

   }//


   /**
    * notre local storage is stored as a string type so 
    data must be converted
    */

    //get questions from local storage
   getQuestions(){
    
    if(localStorage.getItem('questions')==null){
      this.questions=[];
    }else{
      this.questions=JSON.parse(localStorage.getItem('questions'));
    }
    
    return this.questions;
   }

   /*
   note push adds to the end
   unshift andds to the start
   */

   //add question to local storage
   addQuestion(question:Question){
     this.questions.unshift(question);

     //local variable
     let questions;
     
     if(localStorage.getItem('questions')==null){
      questions=[];
      //push new question
      questions.unshift(question);
      //set new array to local storage
      localStorage.setItem('questions',JSON.stringify(questions));
    }else{
      questions=JSON.parse(localStorage.getItem('questions'));
      questions.unshift(question);
      localStorage.setItem('questions',JSON.stringify(questions));
    }
   }

   //remove from localstorage
   removeQuestion(question:Question){
     for(let i=0; i<this.questions.length;i++){
        if(question==this.questions[i]){
          this.questions.splice(i,1);
          localStorage.setItem('questions',JSON.stringify(this.questions));
        }
     }
   }

}
