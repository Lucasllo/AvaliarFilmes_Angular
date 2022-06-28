import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent {

  expandir: boolean = true;

  @Input() titulo:string = '';

  expandir_ocultar(){
    this.expandir = !this.expandir;
  }

}
