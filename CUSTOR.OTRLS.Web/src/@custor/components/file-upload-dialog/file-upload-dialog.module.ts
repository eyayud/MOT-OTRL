import {NgModule} from '@angular/core';
import {MatButtonModule, MatDialogModule, MatToolbarModule} from "@angular/material";
import {FileUploadDialogComponent} from "./file-upload-dialog.component";

@NgModule({
  declarations: [
    FileUploadDialogComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    // MatDividerModule,
    MatToolbarModule
  ],
  entryComponents: [
    FileUploadDialogComponent
  ]
})
export class FileUploadDialogModule {
}
