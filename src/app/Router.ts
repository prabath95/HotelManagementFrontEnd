import { ModuleWithProviders }  from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { AdminComponent } from '../app/admin/admin.component';
import { AddDoctorComponent } from '../app/admin/add-doctor/add-doctor.component';
import { RemoveDoctorComponent } from '../app/admin/remove-doctor/remove-doctor.component';
import { SignupComponent } from '../app/signup/signup.component';
import { DoctorComponent } from '../app/doctor/doctor.component';
import { ProgressComponent } from './doctor/progress/progress.component';
import { TreetPatientsComponent } from './doctor/treet-patients/treet-patients.component';
import { ViewPatientsComponent } from './doctor/view-patients/view-patients.component';
import { PatientComponent } from './patient/patient.component';
import { ChannelDoctorComponent } from './patient/channel-doctor/channel-doctor.component';
import { PProgressComponent } from './patient/p-progress/p-progress.component';
import { SearchDoctorComponent } from './patient/search-doctor/search-doctor.component';
import { ViewPrescriptionComponent } from './patient/view-prescription/view-prescription.component';
import { PaymentComponent } from './patient/payment/payment.component';

export const routes: Routes = [  
    {
      path: '',
      redirectTo: '/login', pathMatch: 'full'
    },
    {
      path: 'login', 
      component : LoginComponent,
    },
    {
      path: 'signup', 
      component : SignupComponent,
    },
    {
      path: 'administrator', 
      component : AdminComponent,
      children: [
          { path: '', redirectTo: 'AddDoctor', pathMatch: 'full'
          },
          { path: 'AddDoctor', component: AddDoctorComponent
          },
          { path: 'removeDoctor', component: RemoveDoctorComponent
          }
        ]
    },
    {
      path: 'doctor', 
      component : DoctorComponent,
      children: [
        { path: '', redirectTo: 'treetPatients', pathMatch: 'full'
        },
        { path: 'treetPatients', component: TreetPatientsComponent
        },
        { path: 'viewPatients', component: ViewPatientsComponent
        },
        { path: 'progress', component: ProgressComponent
        }
      ]
    },
    {
      path: 'patient', 
      component : PatientComponent,
      children: [
        { path: '', redirectTo: 'searchDoctor', pathMatch: 'full'
        },
        { path: 'searchDoctor', component: SearchDoctorComponent
        },
        { path: 'viewPrescription', component: ViewPrescriptionComponent
        },
        { path: 'pProgress', component: PProgressComponent
        },
        { path: 'channelDoctor', component: ChannelDoctorComponent
        },
        { path: 'payment', component: PaymentComponent
        }
      ]
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 