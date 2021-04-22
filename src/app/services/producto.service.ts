import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:3700/api/';

  constructor(private _http: HttpClient) { }

  getProductos(): Observable<any> {
    let headers= new HttpHeaders().set('Content-type','application/json');
    return this._http.get(this.url+'projects',{headers:headers});
  }

  eliminarProducto(id: string): Observable<any> {
    let hearders = new HttpHeaders().set('Content-Type','application/json');

    return this._http.delete(this.url+'project/'+id,{headers:hearders})
  }

  guardarProducto(producto: Producto): Observable<any> {
    let headers= new HttpHeaders().set('Content-type','application/json');

    return this._http.get(this.url+'projects',{headers:headers});
  }

  obtenerProducto(id: string): Observable<any> {
    let hearders = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(this.url+'project/'+id , {headers: hearders});
  }
}
