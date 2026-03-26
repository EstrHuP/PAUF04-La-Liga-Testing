import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(form: NgForm) {
    if (form.invalid) return;
    
    this.authService.login(this.email, this.password)
      .subscribe({
        next: (res: any) => {
          console.log("Usuario recuperado:", res.user);

          const rol = res.user.rol;

          switch(rol) {
            case 'admin':
              this.router.navigate(['/index_admin']);
              break;
            case 'capitan':
              this.router.navigate(['/index_capitan']);
              break;
            case 'arbitro':
              this.router.navigate(['/index_arbitro']);
              break;
            default:
              this.router.navigate(['/index_usuario']);
          }
        },
        error: (err) => {
          console.log(err);
          alert("Usuario o contraseña incorrectos");
        }
      })
  }
}
