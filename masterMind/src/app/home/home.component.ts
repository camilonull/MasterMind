import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}
  products: any[] = []; //  datos de productos

  ngOnInit() {
    // cargar los datos de los productos que tenemos en la base de datos
  }
  loginSesion() {
    this.router.navigateByUrl('/login');
    this.router.navigateByUrl('/cards')
  }
}
