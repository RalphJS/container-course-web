import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any[]>(`${environment.apiUrl}/users`);
  }
}
