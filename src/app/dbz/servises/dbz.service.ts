import { Injectable } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes:Personajes[]=[
    {
      nombre:'goku',
      poder:600
    },
    {
      nombre:'vegeta',
      poder:800
    }
  ];
  get personajes():Personajes[]{
    return [...this._personajes];
  }
  
  constructor() {
  }

  agregar(personaje: Personajes){
    this._personajes.push(personaje);
  }
}
