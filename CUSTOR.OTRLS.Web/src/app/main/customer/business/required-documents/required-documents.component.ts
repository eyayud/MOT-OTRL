import {Component, OnInit} from '@angular/core';
import {FileUploadDialogService} from '../../../../../@custor/services/file-upload-dialog/file-upload-dialog.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FileUploadDialogComponent} from '../../../../../@custor/components/file-upload-dialog/file-upload-dialog.component';

@Component({
  selector: 'app-required-documents',
  templateUrl: './required-documents.component.html',
  styleUrls: ['./required-documents.component.scss']
})
export class RequiredDocumentsComponent implements OnInit {
  confirmDialogRef: MatDialogRef<FileUploadDialogComponent>;

  constructor(fileUploadDialogService: FileUploadDialogService, public dialog: MatDialog) {
  }

  ngOnInit() {

  }

  openFileUploadDialog() {
    this.confirmDialogRef = this.dialog.open(FileUploadDialogComponent,
      {
        disableClose: false
      });
  }
}
