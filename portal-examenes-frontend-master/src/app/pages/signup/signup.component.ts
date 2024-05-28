import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  };

  constructor(private userService: UserService, private snack: MatSnackBar, private translate: TranslateService) { }

  ngOnInit(): void {
  }

  formSubmit(): void {
    console.log(this.user);

    
    
    if (this.user.username === '' || this.user.password === '' || this.user.nombre === '' || this.user.apellido === '' || this.user.email === '' || this.user.telefono === '') {
      this.translate.get(['fields_required', 'accept']).subscribe((translations: any) => {
        this.snack.open(translations.fields_required, translations.accept, {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      });
      return;
    }
    
    this.userService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Usuario guardado', 'Usuario registrado con éxito en el sistema', 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open('Nombre de usuario ya existente !!', 'Aceptar', {
          duration: 3000
        });
      }
    );
  }

}
