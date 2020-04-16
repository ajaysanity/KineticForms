import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Task3Model } from '../models/task3.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgForm, FormBuilder, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {
  task3: Task3Model;

  qualifications = [];
  newQualifications = [];
  faPlus = faPlus;

  certForm = this.fb.group({
    certName: ['', [Validators.required]]
  })
  constructor(private rest: RestService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initTask3();

  }
  initTask3(){
    this.task3 = this.rest.getTask3();
    this.task3.qualifications.forEach(data => {
      this.qualifications.push(data)
    })
    console.log(this.qualifications, 'asdasds')
    this.task3.newQualifications.forEach(data => {
      this.newQualifications.push(data)
    })
    
  }
  removeCertificates(id: number){
    let deleteCert = this.qualifications;
    deleteCert = deleteCert.filter(item=>item.id !=id );
    this.qualifications = deleteCert
  }

  addCertificates(){
  let idLength = 1;
  idLength = idLength + this.qualifications.length
  let value = this.certForm.value
  let addCert = []
  console.log(this.qualifications)
  let data = {
    id: idLength,
    name: value.certName
  }
  // this.qualifications.forEach( datum => {
  //   addCert.push(datum)
  // })
    this.qualifications.push(data)
  console.log('final', this.qualifications)
}
incrementId(){
  return this.qualifications.length++;
}
onSubmit(){
 let formValue = this.certForm.value
 console.log(formValue.certName);
}
}
