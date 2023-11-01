import { Component } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  login(usuario: any) {
    // Lógica de inicio de sesión aquí
  }

  validarEdad(edadInput: HTMLInputElement) {
    if (!edadInput.checkValidity()) {
      alert('Por favor, ingrese un número válido con un máximo de dos dígitos.');
    }
  }
}

