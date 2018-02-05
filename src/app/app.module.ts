import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from "@clr/angular";
import { AgmCoreModule } from '@agm/core';
import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';
import { routing } from '../app/Router';
import { material } from '../app/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { PatientNavComponent } from './shared/patient-nav/patient-nav.component';
import { DoctorNavComponent } from './shared/doctor-nav/doctor-nav.component';
import { AdminComponent } from './admin/admin.component';
import { AddDoctorComponent } from './admin/add-doctor/add-doctor.component';
import { RemoveDoctorComponent } from './admin/remove-doctor/remove-doctor.component';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ViewPatientsComponent } from './doctor/view-patients/view-patients.component';
import { TreetPatientsComponent } from './doctor/treet-patients/treet-patients.component';
import { ProgressComponent } from './doctor/progress/progress.component';
import { PatientComponent } from './patient/patient.component';
import { ChannelDoctorComponent } from './patient/channel-doctor/channel-doctor.component';
import { PProgressComponent } from './patient/p-progress/p-progress.component';
import { SearchDoctorComponent } from './patient/search-doctor/search-doctor.component';
import { ViewPrescriptionComponent } from './patient/view-prescription/view-prescription.component';
import { PaymentComponent } from './patient/payment/payment.component';
import { PaymentConfirmationComponent } from './patient/payment-confirmation/payment-confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    PatientNavComponent,
    DoctorNavComponent,
    AdminComponent,
    AddDoctorComponent,
    RemoveDoctorComponent,
    AdminNavComponent,
    DoctorComponent,
    ViewPatientsComponent,
    TreetPatientsComponent,
    ProgressComponent,
    PatientComponent,
    ChannelDoctorComponent,
    PProgressComponent,
    SearchDoctorComponent,
    ViewPrescriptionComponent,
    PaymentComponent,
    PaymentConfirmationComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    material,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBkemJdxr8iVfUR-CaQK2N8tmK2GqjVCmc'
    })
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ChannelDoctorComponent,
    PaymentConfirmationComponent
  ],
})
export class AppModule { }
