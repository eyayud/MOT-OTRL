// import {catchError, map} from 'rxjs/operators';
import {Injectable, Injector} from '@angular/core';
import {ManagerDTO, ManagerParameters} from '../models/manager.model';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ConfigurationService} from '@custor/services/configuration.service';
import {EndpointFactory} from '@custor/services/security/endpoint-factory.service';
import { PaginationService } from '@custor/services/pagination.service';

@Injectable()
export class ManagerService extends EndpointFactory {
  constructor(private httpClient: HttpClient,
              private config: ConfigurationService, private paginationService: PaginationService,
              injector: Injector) {
    super(httpClient, config, injector);
  }

  private readonly _managersUrl: string = 'api/manager/GetManagerByCustomerId';
  private readonly _managerUrl: string = 'api/manager';
  get managersUrl() {return this.config.baseUrl + this._managersUrl; }
  get managerUrl() {return this.config.baseUrl + this._managerUrl; }

  // Declarations
  managerList: any = [];
  manager: ManagerDTO = new ManagerDTO();

  getManagers(managerParams: ManagerParameters): Observable<any> {
    // const endpointUrl = `${this.managersUrl}/${customerId}/${this.paginationService.page}/${this.paginationService.pageCount}`;
    const endpointUrl = `${this.managersUrl}`;
    const mParams = new HttpParams()
                            .append('ManagerId', managerParams.CustomerId.toString())
                            .append('PageCount', managerParams.PageSize.toString())
                            .append('PageNumber', managerParams.PageIndex.toString())
                            .append('Lang', managerParams.Lang);

    return this.httpClient.get<any>(endpointUrl, {headers: this.getRequestHeaders2(), params: mParams})
      .pipe(
          map(managerList => this.managerList = managerList)
      );
  }
   
  getManager(id): Observable<any> {
    console.log(this.managerUrl);
    const endpointUrl = `${this.managerUrl}/${id}`;
    return this.httpClient.get<ManagerDTO>(endpointUrl, this.getRequestHeaders()).pipe(
      map(cust => {
        this.manager = cust;
        return this.manager;
      }));
  }


  saveManager(manager: ManagerDTO): Observable<any> {
    return this.httpClient.post<ManagerDTO>(this.managerUrl, manager, this.getRequestHeaders())
      .pipe(
        map(mgr => {
          this.manager = mgr;
          return this.manager;
        })
      );
  }

  deleteManager(id: number): Observable<any> {
    const endpointUrl = `${this.managerUrl}/${id}`;
    return this.httpClient.delete<boolean>(endpointUrl, this.getRequestHeaders()).pipe(
      map(result => {
        return result;
      })
    );
  }
}
