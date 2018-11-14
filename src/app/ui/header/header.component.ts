import { Component, OnInit } from '@angular/core';
import { UtenteService } from 'src/app/utente.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private utenteService:UtenteService, private fb: FormBuilder) { }
  
 

  myForm:FormGroup;

  setVariable(){
  
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      nomeFilter: ''
    })
    this.myForm.valueChanges.pipe(
      debounceTime(1000), 
      tap(value =>  {
        this.utenteService.setFilterNome(value.nomeFilter)})
    ).subscribe();
  }


}
