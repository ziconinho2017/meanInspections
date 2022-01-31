import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Inspection } from './inspections/inspections.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  #baseUrl = "http://localhost:3000/api";
  constructor(private http:HttpClient) { }
  public getInspections():Promise<Inspection[]>{
    let url = this.#baseUrl+"/inspections";
    return lastValueFrom(this.http.get(url))
            .then(resolve => resolve as Inspection[])
            .catch(this._errorHandle)
  }
  public getInspection(insId:string):Promise<Inspection>{
    let url = this.#baseUrl+"/inspections/"+insId;
    return lastValueFrom(this.http.get(url))
            .then(resolve => resolve as Inspection)
            .catch(this._errorHandle)
  }
  public deleteInspection(insId:string){
    let url = this.#baseUrl+"/inspections/"+insId;
    return lastValueFrom(this.http.delete(url))
            .then(resolve => resolve as Inspection)
            .catch(this._errorHandle)
  }
  private _errorHandle(error:any):Promise<any>{
    return Promise.reject(error.message || error);
  }
}
