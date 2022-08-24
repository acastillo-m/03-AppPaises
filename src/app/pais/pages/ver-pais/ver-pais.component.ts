import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';


import { PaisAppiService } from '../../services/pais-appi.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisAppiService,
    ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe({
    //     next: (({idPais})=>{

    //       this.paisService.getPais(idPais)
    //         .subscribe({
    //           next:((pais)=>{
    //             console.log(pais);
                
    //           })
    //         });

    //     })
    //   })
   

    this.activatedRoute.params
      .pipe(
        switchMap((param)=>
          this.paisService.getPais(param['idPais'])
        )
      )
      .subscribe({
        next: ((pais:Country)=>{
          this.pais=pais;
        })
      })
  }

}
