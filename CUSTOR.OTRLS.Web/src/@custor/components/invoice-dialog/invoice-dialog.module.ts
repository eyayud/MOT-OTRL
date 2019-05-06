import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvoiceDialogComponent} from './invoice-dialog.component';
import {
  MatButtonModule,
  MatDialogModule, MatDividerModule, MatIconModule, MatLineModule, MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateLanguageLoader} from '../../services/translation.service';


@NgModule({
  declarations: [InvoiceDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
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
    InvoiceDialogComponent
  ]
})
export class InvoiceDialogModule {
}
