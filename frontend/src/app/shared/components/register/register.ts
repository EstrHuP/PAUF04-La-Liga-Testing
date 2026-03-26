import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
      FormsModule, 
      RouterLink,
      CommonModule // necesario para *ngFor y *ngIf
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  newUser = {
    email: '',
    password: '',
    name: '',
    rol: 'jugador'
  };

  roles = [
    { value: 'jugador', label: 'Normal' },
    { value: 'admin', label: 'Administrador' },
    { value: 'arbitro', label: 'Árbitro' },
    { value: 'capitan', label: 'Capitán' }
  ]

  constructor(private authService: AuthService) {}

  register(form: NgForm) {
    if (form.invalid) return;

    this.authService.register(this.newUser)
      .subscribe(
        (res) => {
          console.log("usuario creado:", res);
          alert("Usuario creado correctamente");
      },
      (err) => {
        console.error("Error al registrar usuario:", err);
      }
    )
  }
}
