import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  constructor(private http: HttpClient) {}
//api for getting all data from db
   fetchData(){
    return this.http.get('http://localhost:1023/getData');
   }
// api for fetching data using ID for more details methord
fetchDataById(id: any){
  return this.http.get('http://localhost:1023/getDatabyId/'+id)
}
// API for adding new task to database
   UploadData(data={}){
    return this.http.post('http://localhost:1023/uploadData',data);
   }

 //API for deletion of any Task
deleteTask(id:any){
  return this.http.delete('http://localhost:1023/DeleteTask/'+id);
}
}
