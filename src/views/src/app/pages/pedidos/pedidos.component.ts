import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'; // Importa MatPaginator
import { Pedidos } from '../../interfaces/Response';
import { PedidosService } from '../../services/pedidos.service';
import { PedidoDeleteComponent } from './pedido-delete/pedido-delete.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  displayedColumns: string[] = ['eliminar', 'referencia', 'cuentas_asignadas', 'summoner_name', 'pedido', 'estado', 'comprobante', 'fecha_creacion'];
  dataSource = new MatTableDataSource<Pedidos>([]); 

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator; 

  constructor(private pedidos: PedidosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.pedidos.getAll().subscribe((response: Pedidos[]) => {
      if (response) {
        this.dataSource.data = response; 
        this.dataSource.paginator = this.paginator; 
      }
    });
  }

  delete(id: number) {
    const dialog = this.dialog.open(PedidoDeleteComponent);
    dialog.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.pedidos.delete(id).subscribe(() => {
          this.ngOnInit(); 
        });
      }
    }, (error) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ha ocurrido un error al eliminar el usuario',
        text: `${error}`,
        showConfirmButton: false,
        timer: 1500
      });
    });
  }
}
