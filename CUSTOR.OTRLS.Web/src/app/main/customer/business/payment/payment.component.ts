import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PayOutsModel} from '../../models/payment.model';
import {MatDialog, MatDialogRef} from '@angular/material';
import {PaymentDialogComponent} from '../../../../../@custor/components/payment-dialog/payment-dialog.component';
import {FileUploadDialogComponent} from "../../../../../@custor/components/file-upload-dialog/file-upload-dialog.component";
import {WizardComponent} from "angular-archwizard";
import {ArcWizardService} from "../../services/arc-wizard/arc-wizard.service";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnChanges {

  // load instance of wizard component for programmatically do navigation
  @Input() wizard: WizardComponent;
  payouts: Array<PayOutsModel>;
  paymentDialogRef: MatDialogRef<PaymentDialogComponent>;
  displayedColumns: string[] = ['position', 'serviceType', 'price'];

  constructor(public dialog: MatDialog, private arcWizardService: ArcWizardService) {
    // dummy pay out
    this.payouts = [{
      ServiceType: 'fasdfjfkalsdj fkljsdf lkjsad lkfjsd js lf ksff sf jsdj sljf lskfj sad',
      Price: 34
    },
      {
        ServiceType: 'fasdfjfj jfklansdf',
        Price: 678.7
      }
    ];

    this.arcWizardService.exitStepFourTriggered$.subscribe(res => {
      if (res) {
        this.wizard.navigation.goToNextStep();
      }
    });
  }

  ngOnInit() {
  }

  // check if wizard component instance  is well received
  ngOnChanges(changes: SimpleChanges) {
    if (typeof changes.wizard !== 'undefined') {
      console.log('wizard well received');
    }
  }

  openPaymentDialog() {
    this.paymentDialogRef = this.dialog.open(PaymentDialogComponent,
      {
        disableClose: false,
        width: '399px',
        height: '226px',
      });
  }

}
