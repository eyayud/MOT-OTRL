import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {forkJoin} from 'rxjs';
import {FileUploadService} from '../../services/file-upload/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.scss']
})
export class FileUploadDialogComponent {
  @ViewChild('file') file;
  public fileTobeUploaded = {};
  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;

  // public dialogRef: MatDialogRef<FileUploadDialogComponent>

  constructor(private fileUploadService: FileUploadService, public dialog: MatDialog, public dialogRef: MatDialogRef<FileUploadDialogComponent>,) {

  }

  onFilesAdded() {
    const file = this.file.nativeElement.files[0];
    console.log(file);
    this.fileTobeUploaded = file;
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.fileUploadService.upload('fsa', this.file).subscribe(
      (res) => this.progress = res.message,
      (err) => console.log(err)
    );
    console.log(this.progress);


    this.primaryButtonText = 'Finish';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;


  }

}
