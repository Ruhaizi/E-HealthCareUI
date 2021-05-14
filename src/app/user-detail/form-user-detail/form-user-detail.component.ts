import { Component, OnInit } from '@angular/core';
import { UserDetailService } from 'src/app/shared/user-detail.service';

@Component({
  selector: 'app-form-user-detail',
  templateUrl: './form-user-detail.component.html',
  styleUrls: ['./form-user-detail.component.css']
})
export class FormUserDetailComponent implements OnInit {

  constructor(public service:UserDetailService) { }

  ngOnInit(): void {
  }

}
