import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string='';

  constructor( private auth : AuthService , private router:Router ) { }

  loginform:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null,[Validators.required])

  });


  login(data:FormGroup)
  {
    this.auth.login (data.value).subscribe((response)=>{

      if(response.message=='success')
      {

      localStorage.setItem('userdata',response.token)
      this.auth.setuserdata();
      this.router.navigate(['/home'])

      }

      else
      {
      this.error='Email or Password Invalid' ;
      }


    })
  }




















  ngOnInit(): void {


    }


  }


