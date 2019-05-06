import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {Utilities} from '@custor/helpers/utilities';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  getClientErrorMessage(error: Error): string {
    return error.message ?  error.message :  error.toString();
  }

  getServerErrorMessage(error: HttpErrorResponse): string {
    console.log(error);
    const errList = Utilities.getHttpResponseMessage(error);
    if (error.status === 400) { // bad request (validation)
     return 'Validation Error: ' + errList.toString();
    } else {
      return 'Error code: ' + error.status + ',      Error - ' + errList[0].toString();
    }
  }
}
