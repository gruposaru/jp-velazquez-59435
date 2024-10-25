import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { usuario } from './models';
import { filter } from 'rxjs';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastName',
    'email',
    'fecha',
    'Acciones',
  ];
  dataSource: usuario[] = [];
  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService
  ) {}
  //Metodo del suclo de vida
  ngOnInit(): void {
    this.loadUser();
  }
//Metodo que nos carga todos los usuarios
  loadUser(): void {
    this.isLoading = true;
    this.usersService.getUsers().subscribe({
      next: (user) => {
        this.dataSource = user;
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
//Metodo que nos elimina  un usuario
  onDelete(id: string) {
    if (confirm('Estas seguro')) {
      this.isLoading=true;
      //this.dataSource = this.dataSource.filter((user) => user.id !== id);
      this.usersService.removeUserById(id).subscribe({
        next: (users) => {
          this.dataSource = users;
        },
        error: (err) => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }
//Metodo que nos habre el modal 
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
              this.handleUpdate(editingUser.id, result);
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
//Metodo que nos actualiza el usuario
  handleUpdate(id: string, update: usuario): void {
    this.usersService.updateUserById(id, update).subscribe({
      next: (users) => {
        this.dataSource = users;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
