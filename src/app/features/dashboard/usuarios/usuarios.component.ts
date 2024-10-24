import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { usuario } from './models';
import { filter } from 'rxjs';

const ELEMENT_DATA: usuario[] = [
  {
    id: 'sasa',
    firstname: 'BATAMN',
    lastName: 'velazquez',
    email: 'goku@gmail.com',
    fecha: new Date(),
  },
  {
    id: 'sAAa',
    firstname: 'goku',
    lastName: 'velazquez',
    email: 'goku@gmail.com',
    fecha: new Date(),
  },

  {
    id: 'RErer',
    firstname: 'Robin',
    lastName: 'velazquez',
    email: 'goku@gmail.com',
    fecha: new Date(),
  },
];
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastName',
    'email',
    'fecha',
    'Acciones',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private matDialog: MatDialog) {}

  onDelete(id: string) {
    if (confirm('Estas seguro')) {
      this.dataSource = this.dataSource.filter((user) => user.id !== id);
    }
  }

  openModal(editingUser?: usuario): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: {
          editingUser,
        },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          console.log('Recibimos:', result);
          if (!!result) {
            if (editingUser) {
              this.dataSource = this.dataSource.map((user) =>
                user.id === editingUser.id ? { ...user, ...result } : user
              );
            } else {
              this.dataSource = [
                ...this.dataSource,
                {
                  ...result,
                },
              ];
            }
          }
        },
      });
  }
}
