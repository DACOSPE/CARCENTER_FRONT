import { Injectable } from '@angular/core';
import { Mecanico } from './mecanico';
import { MECANICOS } from './mecanicos.json';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable()
export class MecanicoService {
  private urlEndPoint: string='http://localhost:8081/api/mecanicos';
  private httpHeader=new HttpHeaders({'Content-Type':'application/json'})


  constructor(private http:HttpClient) { }
  getMecanicos():Observable<Mecanico[]>{
   // return of(MECANICOS);
   return this.http.get (this.urlEndPoint).pipe(map(response => response as Mecanico[]));
  }
  create (mecanico:Mecanico): Observable<Mecanico>{
    return this.http.post<Mecanico>(this.urlEndPoint,mecanico,{headers:this.httpHeader})


  }


}
