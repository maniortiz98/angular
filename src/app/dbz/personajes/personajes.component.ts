import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { DbzService } from '../servises/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  get personajes(){
    return this.dbzservise.personajes;
  }

  constructor(private dbzservise: DbzService) {
    
   }

  ngOnInit(): void {
  }
  //@Input() personajes:Personajes[] = []

}
