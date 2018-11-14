import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UiModule } from './ui/ui.module';
import { CommentiPostComponent } from './commenti-post/commenti-post.component';



@NgModule({
  declarations: [
    AppComponent,
    ListCourseComponent,
    ViewCourseComponent,
    EditCourseComponent,
    CommentiPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
