import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Payment , PaymentType} from '../models/payment.model'
import { PaymentService } from '../services/payment.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  servicePaymentInfo  ;
  paymentTypes ; 
  constructor(private fb: FormBuilder, private paymentService : PaymentService) 
  { 
    this.paymentService.getPaymentMethods()
      .subscribe(paymentTypes => this.paymentTypes = paymentTypes);
       console.log(this.paymentTypes)
  }

  ngOnInit() {
    this.getPaymentInfo();
    this.createForm();
  }
  createForm(){
    this.paymentForm = this.fb.group({
      OrderNumber: ['', Validators.required],
      ReceiptNumber: ['', Validators.required],
      PaymentMethod: ['', Validators.required],
      CheckNumber: ['', Validators.required],
    });
    
  }
  getPaymentInfo(){
    this.paymentService.getPaymentInfoByService(1)
      .subscribe(servicePaymentInfo => this.servicePaymentInfo = servicePaymentInfo[0]);
    console.log(this.servicePaymentInfo)
  }
  get OrderNumber(){
    return this.paymentForm.get("OrderNumber")
  }
  get ReceiptNumber(){
    return this.paymentForm.get("ReceiptNumber")
  }
  get PaymentMethod(){
    return this.paymentForm.get("PaymentMethod")
  }
  get CheckNumber(){
    return this.paymentForm.get("CheckNumber")
  }


}
