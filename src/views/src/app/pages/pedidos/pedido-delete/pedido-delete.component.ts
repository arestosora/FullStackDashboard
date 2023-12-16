import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedido-delete',
  templateUrl: './pedido-delete.component.html',
  styleUrls: ['./pedido-delete.component.css']
})
export class PedidoDeleteComponent implements OnInit {
  constructor(private dialog: MatDialogRef<PedidoDeleteComponent>) { }
  ngOnInit(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta opción no tiene vuelta atrás!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Eliminado!',
          text: 'Eliminado con exito.',
          icon: 'success'
        });
        this.dialog.close('confirm'); // Emitir un valor que indique confirmación
      } else {
        this.dialog.close('cancel'); // Emitir un valor que indique cancelación
      }
    });
  }
}
