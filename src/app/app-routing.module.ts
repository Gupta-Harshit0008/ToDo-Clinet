import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ToDoDataComponent } from './to-do-data/to-do-data.component';

const routes: Routes = [
  {path:'',component:HomeComponent}, 
  {path:'Home',component:HomeComponent},
  {path:'Desc',component:ToDoDataComponent},
  {path:'taskDetails/:id',component:DetailsComponent},
  {path:'**',component:NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
