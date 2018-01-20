import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  //array of objects
  questions:Object[];

  constructor() {
    this.questions=
    [
      {
        text:"what is ur name",
        answer:"ged"
      },
      {
        text:"what is ur name2",
        answer:"ged2"
      }
    ];
   }

  ngOnInit() {
  }

}
