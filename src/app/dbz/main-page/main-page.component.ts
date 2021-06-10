import { Component, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../servises/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  //Personajes:Personajes[]= [];

  


  constructor(private dbzservise: DbzService) {
    //this.Personajes = this.dbzservise.personajes
   }

  ngOnInit(): void {
  }


  nuevo:Personajes={
    nombre:'Maestro ',
    poder:100
  }
  

  CambiarNombre(event:any){
    console.log(event.data);
  }
}
