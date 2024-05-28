import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ConfirmDialogComponent } from './pages/confirm-dialog/confirm-dialog.component';
import { UsuarioDetalleComponent } from './pages/usuario-detalle/usuario-detalle.component';
import { UsuarioEditarComponent } from './pages/usuario-editar/usuario-editar.component';
import { PetsliveComponent } from './pages/petslive/petslive.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ClinicaComponent } from './pages/clinica/clinica.component';
import { UsersidebarComponent } from './pages/user/usersidebar/usersidebar.component';
import { WelcomeuserComponent } from './pages/user/welcomeuser/welcomeuser.component';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';





export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    WelcomeComponent,
    UsuariosComponent,
    ConfirmDialogComponent,
    UsuarioDetalleComponent,
    UsuarioEditarComponent,
    PetsliveComponent,
    ServiciosComponent,
    ClinicaComponent,
    UsersidebarComponent,
    WelcomeuserComponent,
    
 

    
    
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })


  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent, UsuarioDetalleComponent, UsuarioEditarComponent]
})
export class AppModule { }
