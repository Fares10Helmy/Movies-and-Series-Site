import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable , BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';    // run (npm install jwt-decode) in cmd

import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userdata= new BehaviorSubject(null);

  constructor(private http : HttpClient ,private router:Router) { }


  postUser(data:object):Observable<any>
  {
    return this.http.post("https://route-egypt-api.herokuapp.com/signup",data)

  }


  login(data:object):Observable<any>
  {
    return this.http.post("https://route-egypt-api.herokuapp.com/signin",data)
  }




  //--------------

  setuserdata():void
  {
    let encodedtoken= JSON.stringify( localStorage.getItem('userdata'));
    let decodeddata:any= jwtDecode(encodedtoken);

    this.userdata.next(decodeddata);

  }

  logout():void
  {
    localStorage.removeItem('userdata');
    this.userdata.next(null);
    this.router.navigate(['/login']);

  }





}
