import { Component } from '@angular/core';
import { PaisAppiService } from '../../services/pais-appi.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  terminoBusqueda :string='';
  hayError: boolean=false;

  constructor(
    private paisService: PaisAppiService,
    ) { }

  buscar(){
    this.hayError=false;
    console.log(this.terminoBusqueda);
    
    this.paisService.buscarPais(this.terminoBusqueda)
    .subscribe({
      next: ((paises)=> 
      {
        console.log(paises);
        console.log(paises[0].continents);
        
      }),
      error: ((err)=> this.hayError=true),
    });
  
  }
}
