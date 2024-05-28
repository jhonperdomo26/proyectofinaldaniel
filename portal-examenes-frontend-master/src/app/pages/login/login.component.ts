import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    "username" : '',
    "password" : '',
  }

  constructor(private snack:MatSnackBar,private loginService:LoginService,private router:Router, private translate: TranslateService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if (this.loginData.username.trim() === '' || this.loginData.username.trim() == null) {
      this.translate.get(['username_required', 'accept']).subscribe((translations: any) => {
        this.snack.open(translations.username_required, translations.accept, {
          duration: 3000
        });
      });
      return;
    }

    if (this.loginData.password.trim() === '' || this.loginData.password.trim() == null) {
      this.translate.get(['password_required', 'accept']).subscribe((translations: any) => {
        this.snack.open(translations.password_required, translations.accept, {
          duration: 3000
        });
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRole() == 'ADMIN'){
            //dashboard admin
            //window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else if(this.loginService.getUserRole() == 'NORMAL'){
            //user dashboard
            //window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard']);
            this.loginService.loginStatusSubjec.next(true);
          }
          else{
            this.loginService.logout();
          }
        })
      },(error) => {
        console.log(error);
        this.snack.open('Detalles inválidos , vuelva a intentar !!','Aceptar',{
          duration:3000
        })
      }
    )
  }
}
