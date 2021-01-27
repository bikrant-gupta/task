import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Questions } from '../model/question.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  addQuestionEmitter:Subject<Questions> = new Subject<Questions>();

  editQuestionEmitter:Subject<Questions> = new Subject<Questions>();
  updateQuestionEmitter:Subject<Questions> = new Subject<Questions>();
  constructor() { }
}
