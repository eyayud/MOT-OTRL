import {Component, OnInit} from '@angular/core';
import {FileUploadDialogService} from "../../services/file-upload-dialog/file-upload-dialog.service";
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.scss']
})
export class FileUploadDialogComponent implements OnInit {
  showFileUploadDialog: boolean;
  public dialogRef: MatDialogRef<FileUploadDialogComponent>
  constructor(private fileUploadDialogService: FileUploadDialogService, public dialog: MatDialog) {
    // listen to file upload dialog triggers
    fileUploadDialogService.fileUploadDialogTriggered$.subscribe(res => {
      if (res) {
        console.log(res);
        this.dialog.open(FileUploadDialogComponent);
      }
    });
  }

  ngOnInit() {
  }

}
