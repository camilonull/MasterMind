import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {

  todo:any;

  constructor(
    private userServiceService:UserServiceService,
    private router:Router
  ) { }
  ngOnInit() {
    console.log('LoginComponent initialized');
  }

  login(usuario:string,contrasena:string){
    if(!usuario || !contrasena){
      alert('Ingrese los datos completos')
    }
    else{

      const encryptedusuario = CryptoJS.AES.encrypt(usuario, environment.secretKey).toString();
      const encryptedcontrasena = CryptoJS.AES.encrypt(contrasena, environment.secretKey).toString();

      console.log({
        usuario: usuario,
        contrasena: contrasena
      });

      this.userServiceService.validateUser({
        usuario: encryptedusuario,
        contrasena: encryptedcontrasena
      }).subscribe(
        res => {
          this.userServiceService.setToken(res.token);
          console.log("home!!!");
          console.log(res.token);
          // this.router.navigate(['home']);
        },
        error => {
          if (error.status === 400) {
            console.log("Credenciales incorrectas");
            alert('Credenciales incorrectas. Por favor, verifique su usuario y contraseña.');
          } else {
            console.error("Error en la solicitud:", error);
            // Manejar otros posibles errores aquí
          }
        }
      );
      // Borrar cuando se implemente la API
      // this.router.navigate(['home'])
    }
  }

}
