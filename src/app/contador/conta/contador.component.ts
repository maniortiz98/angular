import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  numero:number = 10;
  base:number = 5
  numberdos:number=10
  sumar(){
    this.numero +=1
  }
  restar(){
    this.numero -=1
  }
  acomular(valor:number){
    this.numero += valor
  }
  acomularr(valor:number){
    this.numberdos += valor
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
