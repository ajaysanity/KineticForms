import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Task1Model } from '../models/task1.model';
import { Task2Model } from '../models/task2.model';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
task1: Task1Model;
task2: Task2Model;

faBell = faBell;
certificate: any;

  constructor(private rest: RestService,
    ) { }

  ngOnInit() {
this.initTask1();
this.initTask2();
    }
initTask1(){
  this.task1 = this.rest.getTask1()
}
initTask2(){
  this.task2 = this.rest.getTask2()
  console.log(this.task2.employer, 'task2')
}

onSubmit(form: NgForm){
  alert(JSON.stringify(form.value))
  console.log(form.value, 'task2')

}

}
