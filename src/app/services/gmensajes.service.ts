import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GMensaje } from '../Models/GMensaje';

@Injectable({
  providedIn: 'root'
})
export class GmensajeService {

  url= 'http://localhost:3001/api/mensajes/'

  constructor(private http: HttpClient) { }

    getMensajes(): Observable<any>{
    return this.http.get(this.url)
    }
    eliminarMensaje(id: string): Observable<any> {
    return this.http.delete(this.url + id);
    }
    guardarMensaje(mensaje: GMensaje ): Observable<any> {
    return this.http.post(this.url, mensaje);
    }
    obtenerMensaje(id: string): Observable<any> {
    return this.http.get(this.url + id);
    }
    editarMensaje(id: string, mensaje: GMensaje ): Observable<any>{
    return this.http.put(this.url + id, mensaje)
    }
}
