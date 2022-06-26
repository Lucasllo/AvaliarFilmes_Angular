import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent {

  @Input()
  avaliacao: number = 0;

  @Output()
  reavaliacao = new EventEmitter<number>();

  reavaliar(i: number){
    this.reavaliacao.emit(i);
  }

}
