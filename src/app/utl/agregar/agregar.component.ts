import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

// @Input() alumnosUtl:AlumnosUtl[]=[]
@Input() regAlum:AlumnosUtl={
  nombre:'',
  edad:0
}

// @Output() onNuevoAlumno:EventEmitter<AlumnosUtl>=new EventEmitter();
constructor(private utlService:UtlService){}

agregar():void{
  console.log (this.regAlum);
  // this.alumnosUtl.push(this.regAlum);
  // this.onNuevoAlumno.emit(this.regAlum);
  this.utlService.agregarNuevoAlumno(this.regAlum);

  this.regAlum={
  nombre:'',
  edad:0
  }
}
}
