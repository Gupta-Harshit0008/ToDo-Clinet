import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppdataService } from '../appdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  clicked:boolean=false;
   data=[] as any ; 
   showData:boolean=false;
   showDeleteWarning:boolean=false;
   title!:string;
   desc!:string
  constructor(private activatedRoute:ActivatedRoute,
    private _appdata:AppdataService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      let tid=param.get('id')
      this._appdata.fetchDataById(tid).subscribe(res=>{
        console.log(res);
        this.data=res;
      })
    
    })

  }

  DeleteTask(){
    this.activatedRoute.paramMap.subscribe(param=>{
      let tid=param.get('id')
      this._appdata.deleteTask(tid).subscribe(res=>{
        console.log(res);
        this.data=res;
      })
    
    })
    this.router.navigate(['Home']);

  }


  //function
  showDta()  {
    this.showData=true;
    
  }
  
//function for Delete Warning
DeleteWarningShow(){
  this.showDeleteWarning=true;
}
//function for hide Delete Warning
DeleteWarningHide(){
  this.showDeleteWarning=false;
}

  hideData(){
    this.showData=false;
  }

  toggleButton(){
    this.clicked=!this.clicked;
  }

}
