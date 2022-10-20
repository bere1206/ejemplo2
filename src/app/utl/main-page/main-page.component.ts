import { Component} from '@angular/core';
import {AlumnosUtl} from '../interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{


regAlum:AlumnosUtl={
  nombre:'',
  edad:0
}

constructor(){
  
}
}
/* agregarNuevoAlumno(argumento:AlumnosUtl){
  this.alumnosUtl.push(argumento);
  this.UtlService.muestra();
}
}*/
