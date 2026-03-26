import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../../../../core/services/partidos/partidos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.scss',
})
export class AdminPage implements OnInit {

  newPartido = {
    deporte: 'futbol',
    equipo1:'',
    equipo2: '',
    fecha: '',
    arbitro: '',
    ubicacion: '',
  };

  deportes = [
    { value: 'futbol', label: 'Fútbol'},
    { value: 'baloncesto', label: 'Baloncesto'},
    { value: 'volley', label: 'Voleibol'}
  ];

  partidos: any[] = [];
  editPartidoId: string | null = null;

  constructor(private partidoService: PartidoService) {}

  ngOnInit() {
    this.getPartidos();
  }

  createPartido() {
    this.partidoService.createPartido(this.newPartido).subscribe((partido) => {
      alert("Partido creado")
      this.getPartidos();
    })
  }

  getPartidos() {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
    });
  }

  editPartido(partido: any) {
    this.editPartidoId = partido._id
  }

  updatePartido(partido: any) {
    this.partidoService.updatePartido(partido._id, partido).subscribe(updatedPartido => {
      alert("Partido actualizado. Pulsa en cancelar para salir");
      this.getPartidos();
      this.editPartidoId = null;
    });
  }

  cancelEditPartido(partido: any) {
    this.editPartidoId = null;
  }

  deletePartido(id: string) {
    if (confirm("¿Estás seguro de que quieres eliminar este partido?")) {
      this.partidoService.deletePartido(id).subscribe(() => {
        alert("Partido eliminado");
        this.getPartidos();
      })
    }
  }
}
