import {Component} from '@angular/core';
import {AppTranslationService} from '../../../../../@custor/services/translation.service';
import {ConfigurationService} from '../../../../../@custor/services/configuration.service';
import {ArcWizardService} from "../../services/arc-wizard/arc-wizard.service";


@Component({
  selector: 'app-business-license-registration',
  templateUrl: './business-license-registration.component.html',
  styleUrls: ['./business-license-registration.component.scss']
})
export class BusinessLicenseRegistrationComponent {

  exitStepOne: boolean;
  exitStepTwo: boolean;
  exitStepThree: boolean;
  exitStepFour: boolean;

  constructor(
    private translationService: AppTranslationService,
    public configService: ConfigurationService,
    public arcWizardService: ArcWizardService
  ) {
    this.translationService.changeLanguage(this.configService.language);

    // listen to wizard navigation steps
    arcWizardService.exitStepOneTriggered$.subscribe(res => {
      this.exitStepOne = res;
    });

    arcWizardService.exitStepTwoTriggered$.subscribe(res => {
      this.exitStepTwo = res;
    });

    arcWizardService.exitStepThreeTriggered$.subscribe(res => {
      this.exitStepThree = res;
    });
    arcWizardService.exitStepFourTriggered$.subscribe(res => {
      this.exitStepFour = res;
    });
  }


}
