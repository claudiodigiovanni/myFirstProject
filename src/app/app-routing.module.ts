import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CommentiPostComponent } from './commenti-post/commenti-post.component';


const routes: Routes = [
  {path : "", component : ListCourseComponent},
  {path : "viewcomponent/:id", component : ViewCourseComponent },
  {path : "editcomponent/:id", component : EditCourseComponent },
  {path : "returnhome", component : ListCourseComponent},
  {path : "commentPost/:id", component : CommentiPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
