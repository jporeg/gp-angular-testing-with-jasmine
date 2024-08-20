import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: string;
  name: string;
  role: string;
  pokemon: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: Array<User> = [
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      pokemon: 'Blastoise'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    }
  ];

  all(): Observable<Array<User>> {
    return of(this.users);
  }

  findOne(id: string): Observable<any> {
    const user = this.users.find((u: User) => u.id === id);
    return of(user);
  }
}
