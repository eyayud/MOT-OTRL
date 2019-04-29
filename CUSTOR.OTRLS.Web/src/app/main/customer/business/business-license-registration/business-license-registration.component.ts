import {AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AppTranslationService} from '../../../../../@custor/services/translation.service';
import {ConfigurationService} from '../../../../../@custor/services/configuration.service';
import {WizardComponent, WizardStepComponent} from "angular-archwizard";


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

  canExitStepOne: (MovingDirection) => boolean = (direction) => {
    return this.exitStepOne;
  }

  exited(event) {
    this.exitStepOne = event;
  }


}
