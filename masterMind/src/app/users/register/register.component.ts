import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Persona } from '../persona.model';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  res: any
  model = new Persona('', '', 0, '', '', 'C', { contrasena_usuario: '' });
  formularioPersona = new FormGroup({

    nombre_usuario: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    apellido_usuario: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    documento_usuario: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    correo_usuario: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    tipo_documento: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    contrasena_usuario: new FormControl('', [Validators.required, Validators.maxLength(80)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  }
  );

  constructor(private userService: UserServiceService) { }

  addPersona() {
    console.log(this.model)
    this.userService.postRequest(this.model)
      .subscribe(res => {
        this.res = res;
        console.log(this.res);
      },
        error => {
          console.error(error);
          console.log('Error al Registrar estudiante', 'Error de Registro');
        }
      );


  }

  onSubmit(personaForm: NgForm) {
    personaForm.control.markAsTouched();
  }








}
