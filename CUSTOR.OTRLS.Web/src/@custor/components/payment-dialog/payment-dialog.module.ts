import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatLineModule,
  MatProgressBarModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateLanguageLoader} from '../../services/translation.service';
import {PaymentDialogComponent} from "./payment-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [PaymentDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
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
    ReactiveFormsModule,
    MatInputModule,

  ],
  entryComponents: [
    PaymentDialogComponent
  ]
})
export class PaymentDialogModule {
}
