import {Component, Input, OnInit} from '@angular/core';
import {FileUploadService} from '../../../../../@custor/services/file-upload/file-upload.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FileUploadDialogComponent} from '../../../../../@custor/components/file-upload-dialog/file-upload-dialog.component';
import {WizardComponent} from "angular-archwizard";
import {ArcWizardService} from "../../services/arc-wizard/arc-wizard.service";
import {BusinessApiService} from "../../services/business.api.service";
import {ProgressBarService} from "../../../../../@custor/services/progress-bar/progress-bar.service";

@Component({
  selector: 'app-required-documents',
  templateUrl: './required-documents.component.html',
  styleUrls: ['./required-documents.component.scss']
})
export class RequiredDocumentsComponent implements OnInit {
  uploadFileDialogRef: MatDialogRef<FileUploadDialogComponent>;
  // load instance of wizard component for programmatically do navigation
  @Input() wizard: WizardComponent;

  constructor(private fileUploadService: FileUploadService,
              private dialog: MatDialog,
              private arcWizardService: ArcWizardService,
              private apiService: BusinessApiService,
              private progressBarService: ProgressBarService) {
  }

  ngOnInit() {

  }

  openFileUploadDialog() {
    this.uploadFileDialogRef = this.dialog.open(FileUploadDialogComponent,
      {
        disableClose: false
      });
  }

  goToPayment() {
    this.arcWizardService.triggerExitStepThree(true);
  }
}
