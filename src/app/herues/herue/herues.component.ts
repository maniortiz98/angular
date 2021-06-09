import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herues',
  templateUrl: './herues.component.html',
  styleUrls: ['./herues.component.css']
})
export class HeruesComponent implements OnInit {

  nombre:string = 'mani'
  edad:number = 45

  get nombreCapitalizado(){
    return this.nombre.toUpperCase()
  }

  obtenernombre():string{
    return`
    ${this.nombre} - ${this.edad} 
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre():void{
    this.nombre = 'spider';
  }
  cambiarEdad():void{
    this.edad = 30;
  }

}
