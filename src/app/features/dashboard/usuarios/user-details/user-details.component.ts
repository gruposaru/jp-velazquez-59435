import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../../core/services/users.service';
import { usuario } from '../models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  idusuario?: string;
  usuario?: usuario;
  isLoading=false;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UsersService
  ) {
    console.log('LA RUTA ACTIVA ES:', activateRoute);
    this.idusuario = activateRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.isLoading=true;
    this.userService
      .getById(this.activateRoute.snapshot.params['id'])
      .subscribe({
        next: (user) => {
          this.usuario = user;
          this.isLoading =false;
        },
      });
  }
}
