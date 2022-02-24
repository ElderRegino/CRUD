import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  //get equipos

  getEquipos()
  {
    return this.http.get(this.url);
  }

  // get un equipo

  getUnEquipo(id:number){
    return this.http.get(this.url+'/'+ id);
  }

  // agregar

  addEquipo(equipo:Equipo)
  {
    return this.http.post(this.url, equipo);
  }

  //eliminar 

  deleteEquipo(id:string)
  {
    return this.http.delete(this.url+'/'+id);
  }

  // editar
  editEquipo(id:string|number, equipo:Equipo){
    return this.http.put(this.url+'/'+id, equipo);
  }

}

export interface Equipo{
  id_equipo?:number;
  nombre?:string;
  logo?:string;
}
