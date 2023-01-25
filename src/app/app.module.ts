import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoDataComponent } from './to-do-data/to-do-data.component';
import { AboutAuthorComponent } from './about-author/about-author.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NoPageComponent } from './no-page/no-page.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ToDoFormComponent,
    ToDoDataComponent,
    AboutAuthorComponent,
    HomeComponent,
    NoPageComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
