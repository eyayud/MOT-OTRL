import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArcWizardService} from '../../../app/main/customer/services/arc-wizard/arc-wizard.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {

  paymentForm: FormGroup;

  constructor(private fb: FormBuilder,
              private arcWizardService: ArcWizardService,
              public dialogRef: MatDialogRef<PaymentDialogComponent>
  ) {
    // build the form
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.paymentForm = this.fb.group({
      ReferenceNo: ['', Validators.required]
    });
  }

  savePayment() {
    console.log('save');
    this.arcWizardService.triggerExitStepFour(true);
    this.dialogRef.close();
  }
}
