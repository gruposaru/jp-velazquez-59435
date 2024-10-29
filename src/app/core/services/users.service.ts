import { Injectable } from '@angular/core';
import { usuario } from '../../features/dashboard/usuarios/models';
import { delay, map, Observable, of } from 'rxjs';

let DATABASE: usuario[] = [
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
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

//Obtenemos un usuario pir su ID
  getById(id:string): Observable <usuario | undefined>{
    return this.getUsers().pipe(
      map((users)=>users.find((u)=>u.id===id)));
  }



  //Obtenermos el objeto de tipo Usuario
  getUsers(): Observable<usuario[]> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(DATABASE);
        observer.complete();
      }, 2000);
    });
  }
  //removemos un usuario del
  removeUserById(id: String): Observable<usuario[]> {
    DATABASE = DATABASE.filter((user) => user.id != id);
    return of(DATABASE).pipe(delay(1000));
  }
  ///Acutalizamos el Obejto de tipo Usuario
  updateUserById(id: string, Update: Partial<usuario>) {
    DATABASE = DATABASE.map((user) =>
      user.id === id ? { ...user, ...Update } : user
    );
    return new Observable<usuario[]>((observer) => {
      setInterval(() => {
        observer.next(DATABASE);
        observer.complete();
      }),
        1000;
    });
  }
}
