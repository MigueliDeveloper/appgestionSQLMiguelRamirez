import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http:HttpClient){

  }

  public get(filename:string){
    return this.http.get(filename); // GET  
  }

  public post(url:string, body: FormData){
    return this.http.post(url,body); // POST  
  }
}