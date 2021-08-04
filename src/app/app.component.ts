import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Trainee } from './Trainee.model';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  trainee : Trainee = new Trainee();

  
  
  data : Trainee[] = [
    new Trainee (1, 'Robiul Hossain', '1111'),
    new Trainee (2, 'Jobair Hossain', '2222'),
    new Trainee (3, 'Imram Hossain', '3333'),
    new Trainee (4, 'Alauddin Hossain', '4444'),
    new Trainee (5, 'Akram Hossain', '5555'),
    new Trainee (6, 'Kawser Hossain', '6666'),
  ];

  getTrainees() : Trainee[]{
    return this.data;
  }

  saveTrainee(from :NgForm){
    if(this.trainee.id == null || this.trainee.id ==0)
    {
      let traineeId = this.data.length + 1
      this.trainee.id = traineeId;
      this.data.push(this.trainee)
      this.trainee= new Trainee();
    }else{
      let traineeIndex = this.data.findIndex(d => d.id == this.trainee.id)
      this.data.splice(traineeIndex, 1, this.trainee);
      this.trainee= new Trainee();
    }
  }

  DeleteTrainee(id : number){
    let traineeIndex = this.data.findIndex(d => d.id == id)
    this.data.splice(traineeIndex, 1)
  }

  UpdateTrainee(id : number){
    let tr = this.data.find(d => d.id == id)
    this.trainee.id = id;
    this.trainee.name = tr.name;
    this.trainee.course = tr.course;
  }
}
