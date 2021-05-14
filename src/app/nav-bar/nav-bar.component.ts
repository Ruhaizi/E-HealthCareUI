import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private alert: AlertService) { }

  ngOnInit() {
  }
  loggedIn(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.alert.success("you are logged out");
  }

}
