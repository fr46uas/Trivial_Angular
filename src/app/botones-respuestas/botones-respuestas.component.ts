import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones-respuestas',
  templateUrl: './botones-respuestas.component.html',
  styleUrls: ['./botones-respuestas.component.css']
})
export class BotonesRespuestasComponent implements OnInit {

  @Input() respuestas: string[];
  @Output() respuestaSeleccionada: EventEmitter<number>;

  constructor() {

    this.respuestaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }
  manejarClick(indice) {
    this.respuestaSeleccionada.emit(indice);
  }
}
