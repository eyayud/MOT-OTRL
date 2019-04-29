import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../../@custor/modules/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AppTranslationService, TranslateLanguageLoader} from '@custor/services/translation.service';
import {ManagerComponent} from './manager/manager.component';
import {ManagerListComponent} from './manager-list/manager-list.component';
// import {BusinessComponent} from './business/business.component';
// import {BusinessListComponent} from './business-list/Business-list.component';
import {LookUpService} from '../../common/services/look-up.service';
import {AddressService} from '../../common/services/address.service';
import {ManagerService} from './services/manager.service';
import {AngConfirmDialogModule} from '@custor/components/confirm-dialog/confirm-dialog.module';
import {BreadcrumbComponent} from '@custor/components/breadcrumb/breadcrumb.component';
import {ProfileComponent} from './profile/profile.component';
import {BusinessLicenseRegistrationComponent} from './business/business-license-registration/business-license-registration.component';
import {BusinessApiService} from './services/business.api.service';
import {LangSwitcherModule} from '../../../@custor/components/lang-switcher/lang-switcher.component';
import {ArchwizardModule} from "angular-archwizard";
import { GeneralInformationComponent } from './business/general-information/general-information.component';
import { WorkAddressComponent } from './business/work-address/work-address.component';

export const routes = [
  {path: '', redirectTo: 'manager-list', pathMatch: 'full'},
  {path: 'manager-list', component: ManagerListComponent},
  {path: 'manager/:id', component: ManagerComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'businessLicenseRegistration', component: BusinessLicenseRegistrationComponent},
];

@NgModule({
  declarations: [
    ManagerComponent,
    ManagerListComponent,
    BreadcrumbComponent,
    ProfileComponent,
    BusinessLicenseRegistrationComponent,
    GeneralInformationComponent,
    WorkAddressComponent
    // BusinessComponent,
    // BusinessListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateLanguageLoader
      }
    }),
    LangSwitcherModule,
    AngConfirmDialogModule,
    ArchwizardModule
  ],
  providers: [AppTranslationService, LookUpService, AddressService, ManagerService, BusinessApiService]

})
export class CustomerModule {
}
