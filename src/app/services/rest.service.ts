import { Injectable } from '@angular/core';
import  Task1  from '../../data/task1.json'
import  Task2  from '../../data/task2.json'
import  Task3  from '../../data/task3.json'

import { Task1Model } from '../models/task1.model';
import { Task2Model } from '../models/task2.model';
import { Task3Model } from '../models/task3.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
task1: Task1Model;
task2: Task2Model;
task3: Task3Model;
  constructor() { }

  getTask1(){
    return this.task1 = Task1
  }
  getTask2(){
    return this.task2 = Task2
  }
  getTask3(){
    return this.task3 = Task3
  }
}
