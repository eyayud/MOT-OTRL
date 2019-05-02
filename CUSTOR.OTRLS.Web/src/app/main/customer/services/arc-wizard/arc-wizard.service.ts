import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {WizardComponent} from 'angular-archwizard';

@Injectable({
  providedIn: 'root'
})
export class ArcWizardService {

  wizard: WizardComponent;
  // observable boolean sources
  private exitStepOne = new Subject<boolean>();
  private exitStepTwo = new Subject<boolean>();
  private exitStepThree = new Subject<boolean>();
  private exitStepFour = new Subject<boolean>();

  // observable boolean streams
  exitStepOneTriggered$ = this.exitStepOne.asObservable();
  exitStepTwoTriggered$ = this.exitStepTwo.asObservable();
  exitStepThreeTriggered$ = this.exitStepThree.asObservable();
  exitStepFourTriggered$ = this.exitStepFour.asObservable();

  constructor() {
  }

  // commands
  triggerExitStepOne(trigger: boolean) {
    this.goToNextStep();
    this.exitStepOne.next(trigger);
  }


  triggerExitStepTwo(trigger: boolean) {
    this.goToNextStep();
    this.exitStepTwo.next(trigger);
  }

  triggerExitStepThree(trigger: boolean) {
    this.goToNextStep();
    this.exitStepThree.next(trigger);
  }

  triggerExitStepFour(trigger: boolean) {
    this.goToNextStep();
    this.exitStepFour.next(trigger);
  }

  // add the instance of the wizard to the service so that navigation
  // can be done from the service
  addWizard(wizard: WizardComponent) {
    this.wizard = wizard;
  }

  private goToNextStep() {
    this.wizard.navigation.goToNextStep();
  }

}
