import { Component } from '@angular/core';
import { PaisAppiService } from '../../services/pais-appi.service';
import { Country} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  public terminoBusqueda :string='';
  public hayError: boolean=false;
  public paises:Country[]=[];
  
  constructor(private paisService: PaisAppiService ) { }

  buscar(termino: string){
    this.hayError=false;
    this.terminoBusqueda=termino;
    this.paisService.buscarPais(this.terminoBusqueda)
    .subscribe({
      next: ((paises:Country[])=> 
      {
         this.paises=paises;
      }),
      
      error: ((err)=> {
        this.hayError=true;
        this.paises=[];
      }),
    });
 
  }

  sugerencias(termino: string){
    this.hayError=false;
    //TODO crear sugerencias
    
  }
}
