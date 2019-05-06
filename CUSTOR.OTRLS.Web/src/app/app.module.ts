import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {ConfigurationService} from '@custor/services/configuration.service';
import {LocalStoreManager} from '@custor/services/storeManager.service';
import { GroupByPipe } from '@custor/pipes/group-by.pipe';
import { routing } from './app.routing';
// import {MatIconModule} from '@angular/material';
import { ServerErrorInterceptor } from './common/error/server-error.interceptor';
import { GlobalErrorHandler } from './common/error/global-error-handler';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    GroupByPipe,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatIconModule,
    MatSnackBarModule,
    TranslateModule.forRoot(),
    ToastrModule.forRoot(),
    routing,
   ],
  providers: [
    ConfigurationService,
    LocalStoreManager,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
