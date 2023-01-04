import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component {

  @Output() recibir =new EventEmitter<object>()

  dataTareas: any[] = [];
  guardar(nombreTarea:string){
    this.dataTareas.push(nombreTarea)
    this.recibir.emit(this.dataTareas);
    console.log(this.dataTareas)
  }

}
