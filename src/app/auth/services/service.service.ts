import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { IUser } from '../../interface/IUser'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  // fake login
  login(user: IUser): Observable<any> {
    return from([true]);
  }
}
