import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppdataService } from '../appdata.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  title!:string;
  desc!:string;

  data={};
  constructor( private activatedRoute:ActivatedRoute,
    private _Appdata:AppdataService,
    private router:Router ) { }

  ngOnInit(): void {
  }

  OnUpdate(form:NgForm){
    
    console.log('Title is' +" "+form.value.title);
    console.log('desc. is'+ " "+form.value.desc );
//       this.data={
//      title:form.value.title,
//      desc:form.value.desc,
//      UpdatedOn:new Date()
//    }

//    this.activatedRoute.paramMap.subscribe(param=>{
//     let tid=param.get('id')
// this._Appdata.UpdateTask(tid,this.data).subscribe(
//     (response)=> console.log(response),
//     (err)=>console.log(err)
    
// );
// console.log(tid);
// })
this.router.navigate(['Desc'])  
}

}
