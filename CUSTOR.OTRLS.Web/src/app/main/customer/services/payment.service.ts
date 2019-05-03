import { Injectable } from '@angular/core';
import { PaymentType , Payment} from '../models/payment.model';
import { PaymentInfo, PaymentOptions } from '../mock-data/payment';
import { Observable, of } from 'rxjs';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class PaymentService{

    getPaymentMethods(){
        return of(PaymentOptions)
    }
    getPaymentInfoByService(serviceId:any):Observable<any>{
        return of(PaymentInfo)
    }
}