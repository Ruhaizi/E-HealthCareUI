import { Component, OnInit } from '@angular/core';
import { FormUserDetailComponent } from './form-user-detail/form-user-detail.component';
import { UserDetailService } from 'src/app/shared/user-detail.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(public service:UserDetailService) { }

  ngOnInit(): void {
  }

}
