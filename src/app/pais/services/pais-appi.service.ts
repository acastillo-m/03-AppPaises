import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Country} from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisAppiService {

  private apiUrl: string = 'https://restcountries.com/v2'
  public pais: Country[]=[]


  get getParams(){
    return  new HttpParams().set('fields','name,capital,alpha3Code,population,flags')
  }

  constructor(private http: HttpClient) { console.log('El servicio pais esta activo');
  }

  buscarPais(name:string): Observable<Country[]>{
    const url:string= `${this.apiUrl}/name/${name}`;
    return this.http.get<Country[]>(url, {params: this.getParams});
    
  }

  buscarCapital(capital:string): Observable<Country[]>{
    const url:string= `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url,{params: this.getParams});
  }

  getPais(code:string): Observable<Country>{
    const url:string= `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url:string= `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url,{params:this.getParams});
  }
}
