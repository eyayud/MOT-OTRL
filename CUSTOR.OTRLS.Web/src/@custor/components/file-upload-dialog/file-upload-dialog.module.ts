import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule, MatDividerModule, MatIconModule,
  MatLineModule,
  MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';
import {FileUploadDialogComponent} from './file-upload-dialog.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateLanguageLoader} from '../../services/translation.service';

@NgModule({
  declarations: [
    FileUploadDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    // MatDividerModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatLineModule,
    MatIconModule,
    MatDividerModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader
      }
    }),

  ],
  entryComponents: [
    FileUploadDialogComponent
  ]
})
export class FileUploadDialogModule {
}
