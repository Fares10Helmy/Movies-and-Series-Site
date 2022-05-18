
import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:string='';



  constructor( private auth : AuthService , private router:Router) { }



  registerform:FormGroup=new FormGroup({
    first_name:new FormControl(null, [Validators.required , Validators.minLength(2)]),
    last_name : new FormControl(null , [Validators.required]),
    email : new FormControl (null    , [Validators.required , Validators.email]),
    age : new FormControl (null      ),
    password : new FormControl (null , [Validators.required]),

  });



  sumbitRegister(x:FormGroup)
  {
    this.auth.postUser(x.value).subscribe((response)=>{

      if(response.message=='success')
      {
        this.router.navigate(['/login'])
      }

      else
      {
          this.error='Email Already Registered or Input is Requried' ;
      }

    })
  }



  ngOnInit(): void
  {


  }




}



