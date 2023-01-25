import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppdataService } from '../appdata.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  title!:string;
  desc!:string;

  data={};
  constructor( private _Appdata:AppdataService ) { }

  ngOnInit(): void {
  }

  Onsubmit(form:NgForm){
    // alert('Form Submited')
    console.log('Title is' +" "+form.value.title);
    console.log('desc. is'+ " "+form.value.desc );
    // console.log(this.insertingData());
     this.data={
    title:form.value.title,
    desc:form.value.desc,
    createdOn:new Date()
  }
  console.log(this.data);
    // this.data.push(     {title:this.title,
    //   desc:this.desc}
// );
    this._Appdata.UploadData(this.data).subscribe(
      (response)=> console.log(response),
      (err)=>console.log(err)
    );
  }



}
