import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.paymentForm = this.fb.group({
      OrderNumber: [''],
      InvoiceNumber: [''],
      PaymentMethod: [''],
      TotalPayment: [''],
      CheckNumber: [''],
    });
  }

}
