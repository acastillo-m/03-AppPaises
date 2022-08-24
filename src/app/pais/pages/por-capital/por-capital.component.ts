import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisAppiService } from '../../services/pais-appi.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  public terminoBusqueda :string='';
  public hayError: boolean=false;
  public paises:Country[]=[];

  constructor(private paisService: PaisAppiService) { }


  buscar(termino: string){
    this.hayError=false;
    this.terminoBusqueda=termino;
    this.paisService.buscarCapital(this.terminoBusqueda)
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

}
