import { Component} from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisAppiService } from '../../services/pais-appi.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  public regiones: string[]= ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  public regionActiva: string = '';
  public paises: Country[]=[]
  public hayError: boolean=false;


  constructor(private paisService: PaisAppiService) { }


  getClaseCSS(region:string):string{
    return (region === this.regionActiva)? 'btn btn-primary':'btn btn-outline-primary';

  }
  activarRegion(region:string){
    if(region === this.regionActiva){return;}
    this.hayError=false;
    this.regionActiva= region;
    this.paisService.buscarRegion(region)
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
