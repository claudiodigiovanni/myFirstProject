import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtenteService } from '../utente.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private service: UtenteService, 
    private fb:FormBuilder) { }

  id:any;
  utente:any;

  myform:FormGroup;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        this.service.getUtente(this.id).subscribe( utente => {
          this.utente = utente;
        });
    })
  }

  save(){
    this.service.aggiornaUtente(this.utente);
    this.router.navigate(["/returnhome"]);
  }

}
