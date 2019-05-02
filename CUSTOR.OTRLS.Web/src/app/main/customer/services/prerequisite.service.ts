import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServicePrerequisite } from '../models/service-prerequisite.model';
import { RegistrationPreRequiste } from '../mock-data/service-prequisite';
@Injectable({
  providedIn: 'root'
})
export class PrerequisiteService {
  service: ServicePrerequisite
  constructor(private httpClient: HttpClient) { 

  }
  servicePrerequisiteByServiceId(id):Observable<any>{
    return of(RegistrationPreRequiste);
    // return id
  }
  // servicePrerequisiteByServiceId(id):Observable<any>{
  //   return this.httpClient.get<ServicePrerequisite[]>("hello")
  //     .pipe(
  //       map(service => this.service = service )
  //     );
  //   // return id
  // }
}
