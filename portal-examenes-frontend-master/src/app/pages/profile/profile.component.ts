import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './../../services/login.service';
import { UserService } from './../../services/user.service';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = null;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser();
  }

  verDetalle(): void {
    this.dialog.open(UsuarioDetalleComponent, {
      width: '400px',
      data: this.user
    });
  }

}
