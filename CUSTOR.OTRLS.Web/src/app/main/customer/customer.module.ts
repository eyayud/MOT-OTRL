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
import {LookUpService} from '../../common/services/look-up.service';
import {AddressService} from '../../common/services/address.service';
import {ManagerService} from './services/manager.service';
import {AngConfirmDialogModule} from '@custor/components/confirm-dialog/confirm-dialog.module';
import {BreadcrumbComponent} from '@custor/components/breadcrumb/breadcrumb.component';
import {ProfileComponent} from './profile/profile.component';
import {BusinessLicenseRegistrationComponent} from './registration/business-license-registration/business-license-registration.component';
import {BusinessApiService} from './services/business.api.service';
import {ArchwizardModule} from 'angular-archwizard';
import {GeneralInformationComponent} from './registration/business-license-registration/general-information/general-information.component';
import {WorkAddressComponent} from './registration/business-license-registration/work-address/work-address.component';
import {RequiredDocumentsComponent} from './registration/business-license-registration/required-documents/required-documents.component';
import {FileUploadDialogModule} from '../../../@custor/components/file-upload-dialog/file-upload-dialog.module';
import {BusinessComponent} from './business/business.component';
import {RegistrationTabComponent} from './registration-tab/registration-tab.component';
import {RegistrationDocumentComponent} from './registration-document/registration-document.component';
import {GeneralComponent} from './general/general.component';
import {PaymentForRegistrationComponent} from './registration/business-license-registration/payment/payment.component';
import {PaymentDialogModule} from '../../../@custor/components/payment-dialog/payment-dialog.module';
import {FinalWizardStepComponent} from './registration/business-license-registration/final-wizard-step/final-wizard-step.component';
import {PaymentComponent} from './payment/payment.component';
import {InvoiceDialogModule} from '../../../@custor/components/invoice-dialog/invoice-dialog.module';
import {PaginationService} from "../../../@custor/services/pagination.service";
import {KeyConverstorService} from "../../common/services/key-convertor.service";


export const routes = [
  {path: '', redirectTo: 'manager-list', pathMatch: 'full'},
  {path: 'manager-list', component: ManagerListComponent},
  {path: 'manager/:id', component: ManagerComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'tab', component: RegistrationTabComponent},
  {path: 'businessLicenseRegistration', component: BusinessLicenseRegistrationComponent},
];

@NgModule({
  declarations: [
    ManagerComponent,
    ManagerListComponent,
    BreadcrumbComponent,
    ProfileComponent,
    BusinessComponent,
    RegistrationTabComponent,
    RegistrationDocumentComponent,
    PaymentComponent,
    GeneralComponent,

    // business license registration components
    BusinessLicenseRegistrationComponent,
    GeneralInformationComponent,
    PaymentForRegistrationComponent,
    RequiredDocumentsComponent,
    WorkAddressComponent,
    FinalWizardStepComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AngConfirmDialogModule,
    FileUploadDialogModule,
    PaymentDialogModule,
    InvoiceDialogModule,
    ArchwizardModule,
  ],
  providers: [
    KeyConverstorService,
    LookUpService,
    AddressService,
    ManagerService,
    BusinessApiService,
    PaginationService

  ]

})
export class CustomerModule {
}
