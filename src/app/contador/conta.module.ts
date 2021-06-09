import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './conta/contador.component';



@NgModule({
  declarations: [
    ContadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContadorComponent
  ]
})
export class ContaModule { }
