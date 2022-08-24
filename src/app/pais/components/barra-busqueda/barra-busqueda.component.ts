import { Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";


@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit{

  @Output('termino-hijo') onEnter: EventEmitter <string>= new EventEmitter();
  @Output() onDebounce: EventEmitter <string>= new EventEmitter();


  @Input() placeholder: string ='';
  
  debouncer: Subject<string> = new Subject();


  public terminoBusqueda :string='';

  
  constructor() { }
  
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe({
      next: ((valor)=>
      {
        this.onDebounce.emit(valor)
        console.log(valor); //TODO PARA COMPLETAR LA FUNCIONALIDAD
      })
    });

  }

  emitir(){
    this.onEnter.emit(this.terminoBusqueda);
    console.log('emitir',this.terminoBusqueda);
    
  }

  teclaPresionada(){
    this.debouncer.next(this.terminoBusqueda);
    
  }
}
