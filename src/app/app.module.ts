import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes ,RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormUserDetailComponent } from './user-detail/form-user-detail/form-user-detail.component';
import { UserDetailService } from './shared/user-detail.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MedicineCardComponent} from './medicines/medicine-card/medicine-card.component';
import {MedicineListComponent} from './medicines/medicine-list/medicine-list.component';
import { HealthService } from './services/health.service';
import { AddMedicineComponent } from './medicines/add-medicine/add-medicine.component';
import { MedicineDetailComponent } from './medicines/medicine-detail/medicine-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './services/user-service.service';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { FilterPipe } from './pipes/filter.pipe';
import { PaymentComponent } from './payment/payment.component';


const appRoutes: Routes=[
  {path:'add-medicine', component: AddMedicineComponent},
  {path:'', component: MedicineListComponent},
  {path:'medicine-detail/:id',component:MedicineDetailComponent},
  {path:'user/login', component:UserLoginComponent},
  {path:'user/register', component:UserRegisterComponent},
  {path:'**', component:MedicineListComponent},

]

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserDetailComponent,
    MedicineCardComponent,
    FormUserDetailComponent,
      NavBarComponent,
      MedicineListComponent,
      AddMedicineComponent,
      MedicineDetailComponent,
      UserLoginComponent,
      UserRegisterComponent,
      FilterPipe,
      PaymentComponent
   ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,

    //RoutingModule,
     RouterModule.forRoot(appRoutes),
     BrowserAnimationsModule,


     TabsModule.forRoot(),

      //  {
      //    path:'',
      //    component:HomeComponent
      //  },
    //    {
    //      path:'home',
    //      component:HomeComponent
    //   },
    //   {
    //     path:'form-user-detail',
    //     component:UserDetailComponent
    //  },
    // ])
  ],
  providers: [HealthService,UserDetailService,UserServiceService,AlertService,AuthService,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
