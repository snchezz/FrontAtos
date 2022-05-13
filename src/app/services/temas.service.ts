import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temas } from '../modelos/temas.model';
const baseUrl = 'http://localhost:8080/api/temas';
@Injectable({
  providedIn: 'root'
})
export class TemasService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Temas[]> {
    return this.http.get<Temas[]>(baseUrl);
  }
  get(id: any): Observable<Temas> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitulo(titulo: any): Observable<Temas[]> {
    return this.http.get<Temas[]>(`${baseUrl}?titulo=${titulo}`);
  } 
  findByDescripcion(descripcion: any): Observable<Temas[]> {
    return this.http.get<Temas[]>(`${baseUrl}?titulo=${descripcion}`);
  }
  findByFechaInicio(fechaInicio: any): Observable<Temas[]> {
    return this.http.get<Temas[]>(`${baseUrl}?titulo=${fechaInicio}`);
  }
  findByFechaFin(fechaFin: any): Observable<Temas[]> {
    return this.http.get<Temas[]>(`${baseUrl}?titulo=${fechaFin}`);
  }
  findByIniciativa(iniciativa: any): Observable<Temas[]> {
    return this.http.get<Temas[]>(`${baseUrl}?titulo=${iniciativa}`);
  }
}