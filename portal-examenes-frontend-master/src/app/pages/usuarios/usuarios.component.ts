import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './../../services/user.service';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';
import { UsuarioEditarComponent } from '../usuario-editar/usuario-editar.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'username', 'email', 'telefono', 'enabled', 'acciones'];
  currentUser: any;

  constructor(
    private userService: UserService, 
    private dialog: MatDialog, 
    private snackBar: MatSnackBar, 
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al cargar los usuarios', error);
      }
    );
  }

  verDetalle(usuario: any): void {
    this.dialog.open(UsuarioDetalleComponent, {
      width: '400px',
      data: usuario
    });
  }

  editarUsuario(usuario: any): void {
    const dialogRef = this.dialog.open(UsuarioEditarComponent, {
      data: usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUser(result, usuario.id).subscribe(
          () => {
            this.translate.get('user_updated_successfully').subscribe((res: string) => {
              this.translate.get('close').subscribe((close: string) => {
                this.snackBar.open(res, close, {
                  duration: 3000,
                });
              });
            });
            this.loadUsers(); // Recargar la lista después de editar
          },
          (error) => {
            console.error('Error al editar el usuario', error);
          }
        );
      }
    });
  }

  eliminarUsuario(id: number): void {
    this.translate.get('confirm_delete_message').subscribe((message: string) => {
      const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
        width: '300px',
        data: { message: message }
      });

      confirmDialog.afterClosed().subscribe(result => {
        if (result) {
          this.userService.deleteUser(id).subscribe(
            () => {
              this.translate.get('user_deleted_successfully').subscribe((res: string) => {
                this.translate.get('close').subscribe((close: string) => {
                  this.snackBar.open(res, close, {
                    duration: 3000,
                  });
                });
              });
              this.loadUsers(); // Recargar la lista después de eliminar
            },
            (error) => {
              console.error('Error al eliminar el usuario', error);
            }
          );
        }
      });
    });
  }
}
