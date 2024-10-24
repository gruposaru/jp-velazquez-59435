import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generateRandomId } from '../../../../shared/utils';
import { usuario } from '../models';

interface UserDialogData {
  editingUser?: usuario;
}

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styles: ``,
})
export class UserDialogComponent {
  useForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<UserDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: UserDialogData
  ) {
    console.log(data);
    this.useForm = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });
    this.patchFormValue();
  }
private get isEditing(){
  return !! this.data?.editingUser;
}
  patchFormValue() {
    if (this.data?.editingUser) {
      this.useForm.patchValue(this.data.editingUser);
    }
  }
  onSaved(): void {
    if (this.useForm.invalid) {
      this.useForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.useForm.value,
        id: this.isEditing
          ? this.data!.editingUser!.id
          : generateRandomId(4),

          fecha: this.isEditing
          ? this.data!.editingUser!.fecha:
        new Date(),
      });
    }
  }
}
