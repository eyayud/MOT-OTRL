import {Component} from '@angular/core';
import {ConfigurationService} from '../../../../../@custor/services/configuration.service';
import {ArcWizardService} from '../../services/arc-wizard/arc-wizard.service';
import {TranslationLoaderService} from '../../../../../@custor/services/translation-loader.service';
import { locale as langEnglish } from '../../../lang/en';
import { locale as langEthiopic } from '../../../lang/et';


@Component({
  selector: 'app-business-license-registration',
  templateUrl: './business-license-registration.component.html',
  styleUrls: ['./business-license-registration.component.scss']
})
export class BusinessLicenseRegistrationComponent {
  currentLang = '';
  exitStepOne: boolean;
  exitStepTwo: boolean;
  exitStepThree: boolean;
  exitStepFour: boolean;

  constructor(
    private translationLoaderService: TranslationLoaderService,
    public configService: ConfigurationService,
    public arcWizardService: ArcWizardService
  ) {
    this.translationLoaderService.loadTranslations(langEnglish, langEthiopic);

    this.currentLang = this.configService.language;


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
