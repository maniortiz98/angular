import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  herues:string[]= ['mani', 'ortiz', 'carrillo', 'guadalupe'];
  herubor:string = ''

  constructor() { }

  ngOnInit(): void {
  }
  
  borrarherue(){
    //this.herues =  ['ortiz', 'carrillo', 'guadalupe']
    this.herubor =  this.herues.shift() || '';    
  }

}
