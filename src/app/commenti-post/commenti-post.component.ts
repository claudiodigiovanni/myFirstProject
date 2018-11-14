import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commenti-post',
  templateUrl: './commenti-post.component.html',
  styleUrls: ['./commenti-post.component.css']
})
export class CommentiPostComponent implements OnInit {

  constructor(private route:ActivatedRoute, private postService:PostServiceService) { }

  commenti$:any;

  id:number;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.commenti$ = this.postService.getCommentiPost(this.id);
    })
  }

}
