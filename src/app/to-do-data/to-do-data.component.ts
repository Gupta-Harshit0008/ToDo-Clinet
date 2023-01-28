import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../appdata.service';

@Component({
  selector: 'app-to-do-data',
  templateUrl: './to-do-data.component.html',
  styleUrls: ['./to-do-data.component.css']
})
export class ToDoDataComponent implements OnInit {
  data=[] as any;

  filteredString:string='';
  constructor(private _appdata:AppdataService) { }

  ngOnInit(): void {
this.fetchallData();
  }

  fetchallData(){
    
    this._appdata.fetchData().subscribe(
      (response)=> {
        const db=JSON.stringify(response)
      this.data= JSON.parse(db)
      console.log(response)
    },
       (err)=> console.log(err)
    )
  }


}
