import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../servises/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
   @Input() nuevo:Personajes = {
    nombre:'',
    poder:0
  }

  constructor(private dbzservice:DbzService) { }

  ngOnInit(): void {
  }


  //@Output() onNuevoPerso: EventEmitter<Personajes> = new EventEmitter();

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return
    }
    console.log(this.nuevo);
    //this.onNuevoPerso.emit(this.nuevo)
    this.dbzservice.agregar(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
