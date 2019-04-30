import {Component} from '@angular/core';
import {AppTranslationService} from '../../../../../@custor/services/translation.service';
import {ConfigurationService} from '../../../../../@custor/services/configuration.service';



@Component({
  selector: 'app-business-license-registration',
  templateUrl: './business-license-registration.component.html',
  styleUrls: ['./business-license-registration.component.scss']
})
export class BusinessLicenseRegistrationComponent {

  exitStepOne: boolean;

  constructor(
    private translationService: AppTranslationService,
    public configService: ConfigurationService,
  ) {
    this.translationService.changeLanguage(this.configService.language);
  }

  // check if step one can be exited so that it can load the second step
  canExitStepOne(event) {
    this.exitStepOne = event;
  }


}
