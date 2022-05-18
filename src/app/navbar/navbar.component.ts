import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogin:boolean=false;

  constructor(private auth : AuthService) { }

  calllogout()
  {
    this.auth.logout;
  }




  ngOnInit(): void {

    this.auth.userdata.subscribe(()=>{

      if(this.auth.userdata.getValue() !=null)
      {
        this.islogin=true;
      }
      else
      {
        this.islogin=false
      }
      
    })

  }

}
