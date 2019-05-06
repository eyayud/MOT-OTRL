import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ArcWizardService} from '../../../app/main/customer/services/arc-wizard/arc-wizard.service';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss']
})
export class InvoiceDialogComponent implements OnInit {

  constructor(private arcWizardService: ArcWizardService, public dialogRef: MatDialogRef<InvoiceDialogComponent>) {
  }

  ngOnInit() {
  }


  goToConfirmation() {
    this.dialogRef.close();
    this.arcWizardService.triggerExitStepFour(true);
  }
}
