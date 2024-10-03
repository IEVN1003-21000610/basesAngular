import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencias-angular',
  templateUrl: './resistencias-angular.component.html',
  styleUrls: ['./resistencias-angular.component.css']
})
export class ResistenciasAngularComponent implements OnInit {
  formulario: FormGroup;
  seleccionados: any[] = [];

  colores: { [key: string]: number } = {
    negro: 0,
    cafe: 1,
    rojo: 2,
    naranja: 3,
    amarillo: 4,
    verde: 5,
    azul: 6,
    violeta: 7,
    gris: 8,
    blanco: 9
  };

  tolerancias: { [key: string]: number } = {
    oro: 5,
    plata: 10
  };

  constructor() {
    // Inicializar el formulario aquí
    this.formulario = new FormGroup({
      color1: new FormControl('', Validators.required),
      color2: new FormControl('', Validators.required),
      color3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    
  }

  mostrar() {
    const valorBase = (this.colores[this.formulario.value.color1] * 10 + this.colores[this.formulario.value.color2]) * Math.pow(10, this.colores[this.formulario.value.color3]);
    const tol = this.tolerancias[this.formulario.value.tolerancia] / 100;
    const valorMaximo = valorBase * (1 + tol);
    const valorMinimo = valorBase * (1 - tol);

    const nuevaFila = {
      color1: this.formulario.value.color1,
      color2: this.formulario.value.color2,
      color3: this.formulario.value.color3,
      tolerancia: `${this.formulario.value.tolerancia.charAt(0).toUpperCase() + this.formulario.value.tolerancia.slice(1)} ${this.tolerancias[this.formulario.value.tolerancia]}%`,
      valor: valorBase,
      valorMaximo: parseFloat(valorMaximo.toFixed(2)),
      valorMinimo: valorMinimo
    };

    this.seleccionados.push(nuevaFila);

    // Limpiar los campos
    this.formulario.reset();
  }
}
