import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent {

  @Input() //usado para receber dados do componente-pai
  avaliacao: number = 0;

  @Output() //usado para enviar dados para o componente-pai
  avaliacaoChange = new EventEmitter<number>();

  reavaliar(i: number){
    this.avaliacaoChange.emit(i); //usado para enviar dados para o componente-pai
  }

}
