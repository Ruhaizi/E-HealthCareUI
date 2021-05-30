import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedinUser:string;
  constructor(private alert: AlertService) { }

  ngOnInit() {
  }
  loggedIn(){
    this.loggedinUser= localStorage.getItem('userName');
    return this.loggedinUser;
  }
  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.alert.success("you are logged out");
  }

}
