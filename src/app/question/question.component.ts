import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public Username: string;
  public points: number;
  public currentQuestion: number;
  public questions: any = [];
  public counter: number = 30;
  public quizComplete = false;
  public correctAnswer: number = 0;


  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {

    this.Username = localStorage.getItem('Username');
    this.points = 0;
    this.currentQuestion = 0;
    this.questionsService.getQuestions().subscribe((quests) => {
      console.log(this.questions);
      this.questions = quests.questions;
    })
  }

  answer(currentQuestion: number, option: any) {
    console.log(currentQuestion, option);

    if (currentQuestion == this.questions.length) {
      this.quizComplete = true;
    }

    if (option.correct) {
      console.log("correct answer");
      this.points += 2;
      this.correctAnswer++;

    } else {
      console.log('Wrong Answer');
    }
  setTimeout(()=>{
    this.currentQuestion++;
  }, 500);
  
  
  }


}
