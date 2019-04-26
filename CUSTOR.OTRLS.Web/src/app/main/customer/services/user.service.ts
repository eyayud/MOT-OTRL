import { Injectable, Injector } from '@angular/core';
import {UserNameDTO, UserProfile} from '../models/user.model';
import { BusinessesType } from '../mock-data/business';
import { Observable, of } from 'rxjs';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { HttpClient } from '@angular/common/http';
import { EndpointFactory } from '../../../../@custor/services/security/endpoint-factory.service';
import { map, catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class UserService extends EndpointFactory {
    private lang: string;
    user: UserProfile = new UserProfile();
    private readonly _userProfileUrl: string = '/api/customerProfile/';
    get userProfileUrl() { return this.config.baseUrl + this._userProfileUrl; }
    // constructor(private configService: ConfigurationService, private httpClient: HttpClient) {
    //     this.lang = this.configService.language;
    // }
    constructor(private httpClient: HttpClient,
        private config: ConfigurationService,
        injector: Injector) {
        super(httpClient, config, injector);
    }
     getUserProfile(userId: any) {
        //  const endpointUrl = `${this.userProfileUrl}${userId}`;
        const endpointUrl ="http://localhost:60330/api/customerProfile/2"
        console.log(endpointUrl);
         return this.httpClient.get<UserProfile>(endpointUrl).pipe(
                map(usr => {
                    this.user = usr;
                    console.log(this.user)
                    return this.user;
                }),
            );
    }

  getUserNameProfile(userId: any) {
    //  const endpointUrl = `${this.userProfileUrl}${userId}`;
    const endpointUrl = 'http://localhost:60330/api/customerProfile/name/1';
    console.log(endpointUrl);
    return this.httpClient.get<UserNameDTO>(endpointUrl).pipe(
      map(usr => {
        return usr;
      }),
    );
  }
   
    saveProfile(user: UserProfile){
        console.log(user);
        console.log(this.userProfileUrl);
        const endpointUrl = "http://localhost:60330/api/customerProfile"
       // return;
        return this.httpClient.put<UserProfile>(endpointUrl, user)
            .pipe(
                map(usr => {
                    this.user = usr;
                    return this.user;
                }),
                catchError(error => {
                    return this.handleError(error, () => this.saveProfile(user));
                })
            );
    }
}
