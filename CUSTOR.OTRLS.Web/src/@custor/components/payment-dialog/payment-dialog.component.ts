import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArcWizardService} from '../../../app/main/customer/services/arc-wizard/arc-wizard.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {InvoiceDialogComponent} from "../invoice-dialog/invoice-dialog.component";
import {NUMERIC_WITHPERIOD_REGEX} from "../../../app/common/constants/consts";

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {

  paymentForm: FormGroup;
  invoiceDialogRef: MatDialogRef<InvoiceDialogComponent>;

  constructor(private fb: FormBuilder,
              private arcWizardService: ArcWizardService,
              public dialog: MatDialog,
              public dialogRef: MatDialogRef<PaymentDialogComponent>
  ) {
    // build the form
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.paymentForm = this.fb.group({
      ReferenceNo: ['', [Validators.required, Validators.pattern(NUMERIC_WITHPERIOD_REGEX)]]
    });
  }

  savePayment() {
    this.dialogRef.close();
    this.invoiceDialogRef = this.dialog.open(InvoiceDialogComponent,
      {
        disableClose: false,
        width: '800px',
        height: '600px',
      });
    // this.arcWizardService.triggerExitStepFour(true);
  }
}
