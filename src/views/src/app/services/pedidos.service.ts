import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { App } from '../app.settings';
import { Pedidos } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  public baseUrl = App.API_ENDPOINT;

  constructor(public http: HttpClient) { }

  public getAll(): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>(`${this.baseUrl}/pedidos`)
  }

  public delete(id: number): Observable<typeof id> {
    return this.http.delete<typeof id>(`${this.baseUrl}/pedidos/delete/${id}`,)
  }
}
