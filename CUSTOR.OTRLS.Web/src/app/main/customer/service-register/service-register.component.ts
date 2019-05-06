import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { BusinessDTO } from '../models/bussiness.model';
import { BusinessService } from '../services/business.service';
import { AddressService } from '../../../common/services/address.service';

import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { AppTranslationService } from '../../../../@custor/services/translation.service';
import { ALPHABET_WITHSPACE_REGEX, GENDERS, LEGAL_STATUSES, ET_ALPHABET_WITHSPACE_REGEX } from '../../../common/constants/consts';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserProfile } from '../models/user.model';
// import { AppTranslationService } from '../../../../@custor/services/translation.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-service-register',
  templateUrl: './service-register.component.html',
  styleUrls: ['./service-register.component.scss']
})
export class ServiceRegisterComponent implements OnInit {
  serviceForm: FormGroup;
  serviceCompanyForm: FormGroup;
  currentLang = 'en';
  legalStatus: any;
  user: UserProfile;
  showCompanyForm: boolean = false
  showUserForm: boolean = true;
  constructor(private fb: FormBuilder,
    private configService: ConfigurationService,
    private translationService: AppTranslationService,
    private userService: UserService,
    private toastr: ToastrService) {
    this.currentLang = this.configService.language;
    this.translationService.changeLanguage(this.configService.language);
    this.getUserData();
  }

  ngOnInit() {
    this.getLegalStatus();
    this.createForm();
  }
  getLegalStatus() {
    this.legalStatus = [
      { id: 0, name: 'PLC' },
      { id: 1, name: 'Personal' }
    ];
    return this.legalStatus;
  }


  changeLegalStatus(statusId) {
    // alert("hello world")
    // console.log(e.target.data)
    console.log(statusId);
    if (statusId == 1) {
      this.showUserForm = true;
      this.showCompanyForm = false;
    }
    if (statusId == 0) {
      this.showCompanyForm = true;
      this.showUserForm = false;
    }


  }
  getUserData() {
    const userId = 2;
    this.userService.getUserProfile(userId).subscribe(result => {
      this.user = result;
      this.serviceForm.disable();
      console.log(this.user)
      if (result == null) {
        // this.isNewUser = true;
      } else {
        // this.isNewUser = false;
        this.updateForm();
      }
    })
  }
  createForm() {
    this.serviceCompanyForm = this.fb.group({
      CompanyName: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ET_ALPHABET_WITHSPACE_REGEX)])]],


      CompanyNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],

      CompanyNameRegion: ['', Validators.required],
    })
    this.serviceForm = this.fb.group({
      LegalStatus: ['', [Validators.required]],
      Tin: new FormControl(),
      FirstName: new FormControl(),
      FirstNameEng: new FormControl(),
      FirstNameRegion: new FormControl(),
      FatherName: new FormControl(),
      FatherNameEng: new FormControl(),
      FatherNameRegion: new FormControl(),
      GrandName: new FormControl(),
      GrandNameEng: new FormControl(),
      GrandNameRegion: new FormControl(),
      MotherName: new FormControl(),
      MotherNameEng: new FormControl(),
      MotherNameRegion: new FormControl(),
    })

  }
  getUserProfileData() {
    const formModel = this.serviceForm.value;
    return {
      Id: 2,
      FirstName: formModel.FirstName,
      FatherName: formModel.FatherName,
      GrandName: formModel.GrandName,
      MotherName: formModel.MotherName,

      FirstNameEng: formModel.FirstNameEng,
      FatherNameEng: formModel.FatherNameEng,
      GrandNameEng: formModel.GrandNameEng,
      MotherNameEng: formModel.MotherNameEng,

      FirstNameRegion: formModel.FirstNameRegion,
      FatherNameRegion: formModel.FatherNameRegion,
      GrandNameRegion: formModel.GrandNameRegion,
      MotherNameRegion: formModel.MotherNameRegion,
      Tin: formModel.Tin,

    }
  }
  updateForm() {
    this.serviceForm.patchValue({
      Tin: this.user.Tin || '',
      FirstName: this.user.FirstName || '',
      FatherName: this.user.FatherName || '',
      GrandName: this.user.GrandName || '',
      MotherName: this.user.MotherName || '',

      FirstNameEng: this.user.FirstNameEng || '',
      FatherNameEng: this.user.FatherNameEng || '',
      GrandNameEng: this.user.GrandNameEng || '',
      MotherNameEng: this.user.MotherNameEng || '',

      FirstNameRegion: this.user.FirstNameRegion || '',
      FatherNameRegion: this.user.FatherNameRegion || '',
      GrandNameRegion: this.user.GrandNameRegion || '',
      MotherNameRegion: this.user.MotherNameRegion || '',

      BirthDate: this.user.BirthDate || '',
      Nationality: this.user.Nationality == null ? '' : this.user.Nationality.toString(),
      Gender: this.user.Gender == null ? '' : this.user.Gender.toString(),
      Title: this.user.Title || '',
    });
  }
  get LegalStatus() {
    return this.serviceForm.get("LegalStatus");
  }
  get CompanyName(){
    return this.serviceCompanyForm.get("CompanyName");
  }
  get CompanyNameEng(){
    return this.serviceCompanyForm.get("CompanyNameEng");
  }
  get CompanyNameRegion(){
    return this.serviceCompanyForm.get("CompanyNameRegion");
  }
}
