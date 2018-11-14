import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UtenteService } from '../utente.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  constructor(private router:Router, private service:UtenteService) { }

  @Input()
  utenti:any;



  ngOnInit() {
    
    this.service.state.subscribe(params => {
      if(params === ''){
        this.utenti = this.service.users();
      }
      else{
        this.utenti = this.service.users().pipe(map(users => users.filter(user => user.name.indexOf(params) != -1)))
      }
    })
  }


  
}
