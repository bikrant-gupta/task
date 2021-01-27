import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  questionFormGroup: FormGroup;
  submitted:boolean = false;

  isEditting:boolean = false;
  constructor(private fb: FormBuilder,private questionService:QuestionService) {
    this.questionService.editQuestionEmitter.subscribe(res=>{
      this.isEditting = true;
      this.questionFormGroup.setValue(res)
    })
  }

  ngOnInit(): void {
    this.createQuestionFormGroup();
    console.log(this.questionFormGroup)
  }

  clear(): void {
    this.questionFormGroup.reset();
    this.submitted=false;
    this.isEditting = false;
  }

  createQuestionFormGroup(): void {
    this.questionFormGroup = this.fb.group({
      question: ['', [Validators.required]],
      answer: ['', [Validators.required]],
    });
    
  }

  onSubmit(): void {
    this.submitted=true;
    // this.questionService.addQuestionEmitter.next({question:'hi',answer:'hello'});
    if (this.questionFormGroup.valid) {
      if(!this.isEditting){
        this.questionService.addQuestionEmitter.next(this.questionFormGroup.value)
      }else{
        this.questionService.updateQuestionEmitter.next(this.questionFormGroup.value)

      }
    
      this.clear();
    }
  }
 
}
