import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForLogin } from 'src/app/model/user';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService,
              private alert:AlertService,
              private router:Router) { }

  ngOnInit() {
  }
  onLogin(loginForm:NgForm){
    console.log(loginForm.value);
    this.authService.authUser(loginForm.value).subscribe(
      (response: UserForLogin)=>{
        console.log(response);
        const user=response;
        if(user){
     localStorage.setItem('token', user.token);
     localStorage.setItem('userName',user.userName);
     this.alert.success('Login Successful');
     this.router.navigate(['/']);
        }
      }, error=>{
        console.log(error);
        this.alert.error(error.error);

    }

    );
    // if(token){
    //   localStorage.setItem('token', token.userName)
    //  this.alert.success('Login Successful');
    //  this.router.navigate(['/']);
    // }
    // else{
    //  this.alert.error("Login not successful");
    // }
  }

}
