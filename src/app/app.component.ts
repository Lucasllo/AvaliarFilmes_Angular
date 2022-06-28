import { Component } from '@angular/core';
import { filmes } from './filmes.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filmes: filmes[] = [
    {titulo: "Tudo em todo lugar ao mesmo tempo", nota: 5},
    {titulo: "Corra", nota: 4},
    {titulo: "Os Vingadores", nota: 3},
    {titulo: "Parasita", nota: 5},
    {titulo: "Jogos Vorazes", nota: 3}
  ]

}
