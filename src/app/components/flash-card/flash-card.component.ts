import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Questions } from 'src/app/model/question.interface';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss']
})
export class FlashCardComponent implements OnInit {
  @Input() questionData:Questions;
  @Output() delete:EventEmitter<void> = new EventEmitter<void>();
  @Output() edit:EventEmitter<void> = new EventEmitter<void>();

  isCorrect:boolean = false;
  isIncorrect:boolean = false;
  isAnswerOpened:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  deleteQuestion(){
    this.delete.emit();
  }
  editQuestion(){
    this.edit.emit();
  }

}
