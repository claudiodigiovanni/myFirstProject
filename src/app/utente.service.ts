import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http:HttpClient) { }



  private _state: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public state: Observable<string> = this._state.asObservable();

  setFilterNome(filterNome){
    this._state.next(filterNome);
  }
  
  users():Observable<any[]>{
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }

  getUtente(id){
    console.log("https://jsonplaceholder.typicode.com/users/" + id);
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id);
  }

  aggiornaUtente(user){

    console.log(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.put("https://jsonplaceholder.typicode.com/users/" + user.id , user, httpOptions)
    .pipe(
       tap(user => console.log(user)),
      catchError(err => of(err))
    )
  }


}
