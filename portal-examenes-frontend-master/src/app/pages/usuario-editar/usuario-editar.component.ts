import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-editar',
 templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']})
export class UsuarioEditarComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UsuarioEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editForm = this.fb.group({
      nombre: [data.nombre,  [Validators.required, Validators.pattern('^[a-zA-Z\s]*$')]],
      apellido: [data.apellido, [Validators.required, Validators.pattern('^[a-zA-Z\s]*$')]],
      username: [data.username, Validators.required],
      email: [data.email, [Validators.required, Validators.email]],
      telefono: [data.telefono, [Validators.required, Validators.pattern('[0-9]*')]],
      enabled: [data.enabled, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }
}
