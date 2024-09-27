import { Component} from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})

export class CinepolisComponent {
  "clientenombre": string;
  "compradores": number;
  "boletosnum": number;
  "boletosmax": number;
  "tarejetacine": boolean;
  "boletopre": number = 12;
  change = "boletosMax = personas * 7"
  "totalxd": number;
  "mensaje1max": string;
  "mensaje2imp": string;

  calculos()
  {
    // Calculo para la cantidad máxima de boletos que se pueden comprar
    this.boletosmax = this.compradores * 7;

    // Checo si la cantidad de boletos solicitados es mayor a la máxima permitida
      if (this.boletosnum > this.boletosmax) {
          this.mensaje1max = `No puedes comprar más de ${this.boletosmax} boletos.`;
          return;
        }

      // Calculo del total sin descuentos
    this.totalxd = this.boletosnum * this.boletopre;

    // 1 o dos boletos sin descuento
    if (this.boletosnum === 1 || this.boletosnum === 2) {
      this.totalxd = this.boletosnum * this.boletopre; 
     } 

// Aplico descuentos según la cantidad de boletos
    //15%
    else if(this.boletosnum > 5)
      {
        this.totalxd = (this.totalxd - (this.totalxd * 0.15));
      } else if(this.boletosnum= 3 | 4 | 5)
      {
      //Descuento del 10%
      this.totalxd = (this.totalxd - (this.totalxd * 0.10));
      }

   
  
    //else if(this.boletosT && this.boletosT <= 5)
    //{
  //this.total = (this.total - (this.total * 0.1))
    //}

     // Aplicar descuento adicional si se paga con la tarjeta
    if(this.tarejetacine)
    {
      this.totalxd = (this.totalxd - (this.totalxd * 0.1))
    }
    this.mensaje2imp = `El total a pagar es $${this.totalxd}. Nombre del cliente:  ${this.clientenombre}.`;
  }
}

