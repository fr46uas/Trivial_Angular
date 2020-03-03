import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../models/pregunta.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  arrPreguntas: Pregunta[];
  preguntaActiva: number;
  preguntasCorrectas: number;
  preguntasIncorrectas: number;
  mensaje: string;


  constructor() {
    this.mensaje = 'Esperando respuesta';
    this.preguntasCorrectas = 0;
    this.preguntasIncorrectas = 0;
    this.preguntaActiva = 0;
    this.arrPreguntas = [

      new Pregunta('¿Quién ganó el Mundial de Futbol en 2010?', ['Francia', 'España', 'Italia', 'Alemania'], 1),
      new Pregunta('¿Cual es la capital de Italia?', ['Milan', 'Turin', 'Napoles', 'Roma'], 3),
      new Pregunta('No ha sido presidente del Real Madrid', ['Boluda', 'Bernabeu', 'Di Stefano', 'Calderon'], 2),
      new Pregunta('¿Quien no ha ganado nunca una Champions?', ['Liverpool', 'Tottenhan', 'Borussia', 'Nothingam'], 1),
      new Pregunta('¿Como se llama la nave que aterrizó en la Luna?', ['Apolo 9', 'Apolo 10', 'Apolo 11', 'Apolo 12'], 2),
      new Pregunta('¿Quien fue el primer presidente de EEUU?', ['Franklin', 'Washington', 'Hoover', 'Trum'], 1),
      new Pregunta('¿Cuento duró la guerra de los 100 años?', ['99 años', '100 años', '109 años', '116 años'], 3),
      new Pregunta('¿Que carabela no volvió del viaje donde Colón descubrió America?', ['Pinta', 'Niña', 'S. Maria', 'Todas'], 2),
      new Pregunta('¿Quién fundó la ciudad de Roma?', ['Romulo', 'Remo', 'Los dos', 'La loba'], 2),
      new Pregunta('¿En que pais se encuentra el rio Po?', ['Italia', 'Francia', 'Suiza', 'Alemania'], 1),
      new Pregunta('¿A donde viajo la famosa perra Laika?', ['Marte', 'Polo Norte', 'Antartida', 'Luna'], 3),
      new Pregunta('¿En que pais se juega mas a los dardos?', ['G. Bretaña', 'EEUU', 'Francia', 'España'], 0),
      new Pregunta('¿Cual es el idioma mas hablado en Suiza?', ['Suizo', 'Aleman', 'Frances', 'Holandes'], 1),
      new Pregunta('¿En que mes esta el sol mas cerca de la tierra?', ['Enero', 'Abril', 'Agosto', 'Diciembre'], 3),
      new Pregunta('Se acabó', ['', '', '', ''], 0),



    ];
  }

  ngOnInit() {
  }

  manejarRespuestaSeleccionada($event) {

    if ($event === this.arrPreguntas[this.preguntaActiva].respuestaCorrecta) {
      this.preguntasCorrectas++;
      this.preguntaActiva++;
      this.mensaje = 'Respuesta correcta';
      if (this.preguntaActiva === this.arrPreguntas.length - 1) {


      }
    } else {
      this.preguntasIncorrectas++;
      this.preguntaActiva++;
      this.mensaje = 'Respuesta incorrecta';

    }
  }


}
