import { Injectable } from '@angular/core';
import { UserDetail } from './user-detail.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(public service: UserDetailService) { }

  formData: UserDetail = new UserDetail();
}
