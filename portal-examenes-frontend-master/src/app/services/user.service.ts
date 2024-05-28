import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public añadirUsuario(user: any): Observable<any> {
    return this.httpClient.post(`${baserUrl}/usuarios/`, user);
  }

  public getAllUsers(): Observable<any> {
    return this.httpClient.get(`${baserUrl}/usuarios`);
  }

  public getUserByUsername(username: string): Observable<any> {
    return this.httpClient.get(`${baserUrl}/usuarios/${username}`);
  }

  public updateUser(user: any, id: number): Observable<any> {
    return this.httpClient.put(`${baserUrl}/usuarios/${id}`, user);
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${baserUrl}/usuarios/${id}`);
  }

}

