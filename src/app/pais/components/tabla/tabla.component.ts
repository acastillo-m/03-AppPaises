import { Component, OnInit, Input  } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input('paises-hijo') paises : Country[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
