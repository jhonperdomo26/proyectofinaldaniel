import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PetsliveComponent } from './pages/petslive/petslive.component';
import { WelcomeuserComponent } from './pages/user/welcomeuser/welcomeuser.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicaComponent } from './pages/clinica/clinica.component';




const routes: Routes = [
  {
    path : '',
    component : PetsliveComponent,
    pathMatch : 'full'
  },

  {
    path : 'servicios',
    component : ServiciosComponent,
    pathMatch : 'full'
  },
  {
    path : 'clinica',
    component : ClinicaComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },

  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path : 'usuarios',
        component : UsuariosComponent,
      },
      {
        path : '',
        component : WelcomeComponent
      }
    ]
  },
  
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path : '',
        component : WelcomeuserComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
