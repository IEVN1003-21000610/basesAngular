import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  //styleUrl:
  // <!--template:`
  // <div class="container">
  //   <h1>{{title}}</h1>
  // </div>
  // `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="Saludo de variable";

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';


  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:any[]=[
   {
     "productoId":1,
     "Modelo":'Sentra',
     "Descripcion":"4 puertas familiar",
     "year":"febrero 3 2022",
     "Precio":"250000",
     "Marca":"Nissan",
     "Color":"Morado",
     "imagenUrl":"https://th.bing.com/th/id/OIP.rmAdxrdv7dqcT0YU8r9dVAHaEI?w=324&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
   },
   {
    "productoId":2,
    "Modelo":'A4',
    "Descripcion":"2 puertas",
    "year":"marzo 3 2023",
    "Precio":"300000",
    "Marca":"Toyota",
    "Color":"Blanco",
    "imagenUrl":"https://th.bing.com/th/id/OIP.y-YNEl7I6tFu96qWv9URQQHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  },
  {
    "productoId":3,
    "Modelo":'Xd16',
    "Descripcion":"2 puertas",
    "year":"30 de junio del 2003",
    "Precio":"450000",
    "Color":"Rosa",
    "imagenUrl":"https://th.bing.com/th/id/OIP.4KAD9QGw7F1sbWbqT62MfwHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
  }
  ]
}
