import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service'
import {Questions} from '../../model/question.interface'

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.scss']
})
export class AllCardsComponent implements OnInit {
 

  

  questions:Array<Questions>=[]
  updatingIndex:number;
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
    this.questionService.addQuestionEmitter.subscribe(res=>{
      console.log(res);
      this.questions.push(res)
    })
    this.questionService.updateQuestionEmitter.subscribe(res=>{
      console.log(res);
      this.questions[this.updatingIndex]=res;
      this.updatingIndex = undefined;
    })
  }
  deleteQuestion(index):void{
    this.questions.splice(index,1);
  }
  updateQuestion(index):void{
    this.updatingIndex = index;
    this.questionService.editQuestionEmitter.next(this.questions[index])
  }

}
