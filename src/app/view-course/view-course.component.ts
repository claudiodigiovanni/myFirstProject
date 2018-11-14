import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { _getViewData } from '@angular/core/src/render3/instructions';
import { UtenteService } from '../utente.service';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute, private service:UtenteService,
    private postService:PostServiceService) { }

  @Input()
  id:any;

  utente$:any;

  posts:any;

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      
      this.id = params.get('id');
      this.utente$ = this.service.getUtente(this.id);
      this.posts = this.postService.getUserPosts(this.id);
      
    })
   
  }
}