import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../../../core/services/jugadores/jugadores.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page-jugadores',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './admin-page-jugadores.html',
  styleUrl: './admin-page-jugadores.scss',
})
export class AdminPageJugadores implements OnInit {

  newJugador = {
    deporte: 'futbol',
    nombre: '',
    nombreEquipo: ''
  };

  deportes = [
    { value: 'futbol', label: 'Fútbol'},
    { value: 'baloncesto', label: 'Baloncesto'},
    { value: 'volley', label: 'Voleibol'}
  ];

  jugadores: any[] = [];
  editJugadorId: string | null = null;

  constructor(private jugadorService: JugadoresService) {}

  ngOnInit(): void {
    this.getJugadores();
  }

  createJugador() {
    this.jugadorService.createJugador(this.newJugador).subscribe((jugador) => {
      alert("Jugador creado");
      this.getJugadores();
    })
  }

  getJugadores() {
    this.jugadorService.getJugadores().subscribe((jugadores) => {
      this.jugadores = jugadores;
    })
  }
  
  editJugador(jugador: any) {
    this.editJugadorId = jugador._id
  }

  cancelEditJugador(jugador: any) {
    this.editJugadorId = null;
  }

  updateJugador(jugador: any) {
    this.jugadorService.updateJugador(jugador._id, jugador).subscribe(updatedJugador => {
      alert("Jugador actualizado. Pulsa en cancelar para salir");
      this.getJugadores();
      this.editJugadorId = null;
    });
  }

  deleteJugador(id: string) {
    if (confirm("¿Estás seguro de que quieres eliminar este jugador?")) {
      this.jugadorService.deleteJugador(id).subscribe(() => {
        alert("Jugador eliminado");
        this.getJugadores();
      })
    }
  }
}
