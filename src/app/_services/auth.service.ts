import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }
  //Metodo Login
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  //Metodo Register
 
register(username: string, email: string, apellidos: string, becas: string, ceco: string, contacto: string, das: string,emailAtos: string, center:string, dni:string, convenio:string,  fechaFCT: string, fechaNacimiento: string, finFCT: string, groupProyect: string, location: string, nameGroupTeams: string, orgUnit: string, phone: string, po: string, positionId: string, rr: string, sociedad: string, ss: string, teacher: string, tipo: string, password: string): Observable<any> {
  return this.http.post(AUTH_API + 'signup', {
  username,
  email,
  password,
  apellidos,
  location,
  teacher,
  nameGroupTeams,
  groupProyect,
  center,
  finFCT,
  dni,
  fechaNacimiento,
  fechaFCT,
  tipo,
  po,
  positionId,
  rr,
  becas,
  phone,
  ss,
  orgUnit,
  convenio,
  das,
  contacto,
  ceco,
  sociedad,
  
  emailAtos,
  }, httpOptions);
  }
  }

