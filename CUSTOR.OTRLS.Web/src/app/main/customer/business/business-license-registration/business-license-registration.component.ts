import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProgressBarService} from '../../../../../@custor/services/progress-bar/progress-bar.service';
import {ManagerService} from '../../services/manager.service';
import {BusinessApiService} from '../../services/business.api.service';
import {AppTranslationService} from '../../../../../@custor/services/translation.service';
import {ToastrService} from 'ngx-toastr';
import {
  ALPHABET_WITHSPACE_REGEX,
  ET_ALPHABET_WITHSPACE_REGEX,
  NUMERIC_WITHPERIOD_REGEX
} from '../../../../common/constants/consts';
import {UserNameDTO} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {ConfigurationService} from "../../../../../@custor/services/configuration.service";
import {MovingDirection, WizardStepComponent} from "angular-archwizard";
import {Observable} from "rxjs";

@Component({
  selector: 'app-business-license-registration',
  templateUrl: './business-license-registration.component.html',
  styleUrls: ['./business-license-registration.component.scss']
})
export class BusinessLicenseRegistrationComponent implements OnInit {

  // declare variable for dummy sectors
  dummySectorsData: any;
  sectorsList: any;
  subSectorsList = [];
  sectionsList = [];
  subSectionsList = [];
  classificationLenses = [];
  selectedClassificationLenses = [];

  licenseRegistrationForm: FormGroup;
  // declare manger for getting default company name
  customerName: UserNameDTO;


  // testing arc-wizard
  stepOneExit: boolean;

  constructor(
    private translationService: AppTranslationService,
    private formBuilder: FormBuilder,
    private apiService: BusinessApiService,
    private userService: UserService,
    private progressBarService: ProgressBarService,
    private toasterService: ToastrService,
    public configService: ConfigurationService,
  ) {
    this.translationService.changeLanguage(this.configService.language);

    // build the form
    this.initForm();

    // get manager by id
    // TODO: get id from local storage for now we are using hard coded Id
    this.getCustomerName('1');

    // get list of sectors
    this.getSectors();

  }


  ngOnInit() {
  }

  initForm() {
    this.licenseRegistrationForm = this.formBuilder.group({
      companyNameAmharic: ['', [Validators.required, Validators.minLength(3), Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)]],
      companyNameEnglish: ['', [Validators.required, Validators.minLength(3), Validators.pattern(ALPHABET_WITHSPACE_REGEX)]],
      companyNameRegional: ['', [Validators.required, Validators.minLength(3)]],
      signedCapital: ['', [Validators.required, Validators.minLength(2), Validators.pattern(NUMERIC_WITHPERIOD_REGEX)]],
      sector: ['', Validators.required],
      subSectors: ['', Validators.required],
      sections: ['', Validators.required],
      subSections: ['', Validators.required],
      classificationLens: ['', Validators.required]
    });
  }

  getCustomerName(id) {
    this.progressBarService.triggerProgressBar(true);
    this.userService
      .getUserNameProfile(id)
      .subscribe(res => {
          this.customerName = res;
          // patch form controls related with company default values
          this.updateCompanyNameFormControls();
          this.progressBarService.triggerProgressBar(false);
        },
        error => {
          this.toasterService.error(error);
          this.progressBarService.triggerProgressBar(false);
        });


  }

  updateCompanyNameFormControls() {
    // concatenate and assign first name and last name
    const fullAmharicName = this.customerName.FirstName + ' ' + this.customerName.FatherName;
    const fullEnglishName = this.customerName.FirstNameEng + ' ' + this.customerName.FatherNameEng;
    const fullRegionalName = this.customerName.FirstNameRegion + ' ' + this.customerName.FatherNameRegion;

    this.licenseRegistrationForm.patchValue({companyNameAmharic: fullAmharicName});
    this.licenseRegistrationForm.patchValue({companyNameEnglish: fullEnglishName});
    this.licenseRegistrationForm.patchValue({companyNameRegional: fullRegionalName});
  }

  // setter methods for license registration form controllers


  // getter methods for license registration form controllers

  get companyNameAmharic() {
    return this.licenseRegistrationForm.get('companyNameAmharic');
  }

  get companyNameEnglish() {
    return this.licenseRegistrationForm.get('companyNameEnglish');
  }

  get companyNameRegional() {
    return this.licenseRegistrationForm.get('companyNameRegional');
  }

  get signedCapital() {
    return this.licenseRegistrationForm.get('signedCapital');
  }

  get sector() {
    return this.licenseRegistrationForm.get('sector');
  }

  get subSectors() {
    return this.licenseRegistrationForm.get('subSectors');
  }

  get sections() {
    return this.licenseRegistrationForm.get('sections');
  }

  get subSections() {
    return this.licenseRegistrationForm.get('subSections');
  }

  // end of getter methods

  getSectors() {
    this.progressBarService.triggerProgressBar(true);
    // get dummy sectors

    this.dummySectorsData = this.apiService.getJSON().subscribe(res => {
      this.dummySectorsData = res;
      this.sectorsList = this.dummySectorsData.sector;
    });

    // this.apiService.getSectors().subscribe(res => {
    //   console.log(res);
    //   // patch response to sector form controller
    //   this.licenseRegistrationForm.patchValue({sector: res});
    //   this.progressBarService.triggerProgressBar(false);
    // }, error => {
    //   console.error(error);
    //   this.progressBarService.triggerProgressBar(false);
    // });


  }

  getSubSectors(sector) {
    this.subSectorsList = [];
    this.classificationLenses = [];
    this.sectionsList = [];
    this.subSectionsList = [];
    this.classificationLenses = [];
    this.dummySectorsData.subSectors.forEach(subSector => {
      if (subSector.sectorId !== sector.value) {
        return;
      }
      this.subSectorsList.push(subSector);
    });


    // this.apiService.getSubSectors(id).subscribe(res => {
    //   console.log(res);
    //
    //   // patch response to sub sector form controller
    //   this.licenseRegistrationForm.patchValue({subSectors: res});
    //   this.progressBarService.triggerProgressBar(false);
    // }, error => {
    //   console.error(error);
    //   this.progressBarService.triggerProgressBar(false);
    // });
  }

  getSections(subSector) {
    this.sectionsList = [];
    this.classificationLenses = [];
    this.subSectionsList = [];
    this.dummySectorsData.sections.forEach(section => {
      if (section.subSectorId !== subSector.value) {
        return;
      }
      this.sectionsList.push(section);
    });

    // this.apiService.getSectionList(id).subscribe(res => {
    //   console.log(res);
    //   // patch response to sub secttion form controller
    //   this.licenseRegistrationForm.patchValue({sections: res});
    //   this.progressBarService.triggerProgressBar(false);
    // }, error => {
    //   console.error(error);
    //   this.progressBarService.triggerProgressBar(false);
    // });
  }

  getSubSections(section) {
    // empty array to avoid element repetitions
    this.subSectionsList = [];
    this.classificationLenses = [];
    this.dummySectorsData.subSections.forEach(subSection => {
      if (subSection.sectionId !== section.value) {
        return;
      }
      this.subSectionsList.push(subSection);
    });

    // this.apiService.getSubSectorList(id).subscribe(res => {
    //   console.log(res);
    //   // patch response to sub section form controller
    //   this.licenseRegistrationForm.patchValue({subSections: res});
    //   this.progressBarService.triggerProgressBar(false);
    // }, error => {
    //   console.error(error);
    //   this.progressBarService.triggerProgressBar(false);
    // });
  }


  getClassificationLens(subSection) {

    // empty array to avoid element repetitions
    this.classificationLenses = [];
    this.dummySectorsData.classificationLens.forEach(classification => {
      if (classification.subSectionId !== subSection.value) {
        return;
      }
      this.classificationLenses.push(classification);
    });


    // this.apiService.getSubSectorList(id).subscribe(res => {
    //   console.log(res);
    //   // patch response to sub section form controller
    //   this.licenseRegistrationForm.patchValue({subSections: res});
    //   this.progressBarService.triggerProgressBar(false);
    // }, error => {
    //   console.error(error);
    //   this.progressBarService.triggerProgressBar(false);
    // });
  }

  selectClassification(classification) {
    if (this.selectedClassificationLenses.length > 0) {
      this.selectedClassificationLenses.filter((value, index, arr) => {
        if (value === classification.id) {
          return arr.splice(index, 1);
        } else {
          return arr.push(classification.id);
        }
      });
    } else {
      this.selectedClassificationLenses.push(classification.id);
    }
    this.licenseRegistrationForm.patchValue({classificationLens: this.selectedClassificationLenses});


  }


  canExitStepOne: (MovingDirection) => boolean = (direction) => {
    console.log(direction);
    this.progressBarService.triggerProgressBar(true);
    console.log(this.licenseRegistrationForm.value);
    this.apiService.saveApplication(this.licenseRegistrationForm.value).subscribe(res => {
      this.progressBarService.triggerProgressBar(false);
      return true;
    });
    return false;

  };


  // testing arc-wizard features
  test(event: MovingDirection) {
    console.log("hello");
  }

  test2() {
    return true;
  }

  test3(event: MovingDirection) {
    console.log(event);

  }

}
