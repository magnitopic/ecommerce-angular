import { Injectable } from '@angular/core';
import { Disco } from '../model/disco';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DiscoCarrito } from '../model/discoCarrito';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  //ruta_webservices = '/entregas/tienda_angular_php_2024/web_services/';

  ruta_webservices = '/server/';

  constructor(private http: HttpClient) {}

  obtenerDiscos(): Observable<Disco[]> {
    console.log('Obteniendo discos...');
    return this.http.get<Disco[]>(
      this.ruta_webservices + 'web_services/discos.php'
    );
  }

  obtenerDiscoPorId(id_disco: number): Observable<Disco> {
    console.log('Obteniendo disco con id ' + id_disco);
    return this.http.get<Disco>(
      this.ruta_webservices +
        'web_services/obtenerDiscoPorId.php?id=' +
        id_disco
    );
  }

  agregarAlCarrito(id_disco: number, cantidad: number): Observable<any> {
    return this.http.post<any>(
      this.ruta_webservices + 'web_services/agregarProductoCarrito.php',
      {
        id: id_disco,
        cantidad: cantidad,
      }
    );
  }

  obtenerDiscosCarrito(): Observable<DiscoCarrito[]> {
    return this.http.get<DiscoCarrito[]>(
      this.ruta_webservices + 'web_services/obtenerDiscosCarrito.php'
    );
  }

  vaciarCarrito():Observable<string>{
    return this.http.get<string>(this.ruta_webservices + "web_services/vaciarCarrito.php");
  }

  registrarPedido(p: Pedido): Observable<string> {
    return this.http.post<string>(
      this.ruta_webservices + 'web_services/registrarPedido.php',
      p
    );
  }
}
