import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaService } from '../services/tienda.service';
import { Disco } from '../model/disco';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css',
})
export class DetallesComponent {
  id_disco: number = 0;
  disco:Disco = {} as Disco;

  constructor(
    private servicioTienda: TiendaService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_disco = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.servicioTienda.obtenerDiscoPorId(this.id_disco).subscribe((disco) => {
      this.disco = disco;
    });
  }

  agregar_producto_al_carrito() {
    console.log('Agregando producto al carrito con id: '+ this.id_disco); 
  }

}
