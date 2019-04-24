import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LookUpService } from '../../../common/services/look-up.service';
import { UserProfile } from '../models/user.model';
import { UserService } from '../services/user.service';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { Gender, LegalStatus, Lookup } from '../../../common/models/lookup.model';
import { ALPHABET_WITHSPACE_REGEX, GENDERS, LEGAL_STATUSES } from '../../../common/constants/consts';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ProfileForm: FormGroup;
  currentLang = 'en';
  user: UserProfile;
  public countryList: Lookup[];
  public titleList: Lookup[];
  genders: Gender[] = [];

  constructor(private fb: FormBuilder, private lookUpService: LookUpService,
    private configService: ConfigurationService,
    private userService: UserService) {
    const countryLookupType = 8;
    const titleLookupType = 89;
    this.currentLang = this.configService.language;

    this.getTitles(titleLookupType);
    this.getCountries(countryLookupType);
  }
  private getCountries(id: any) {
    this.lookUpService.getLookupByParentId(this.currentLang, id).subscribe(result => {
      console.log(result);
      this.countryList = result;
    });
  }

  getTitles(id: any) {
    this.lookUpService.getLookupByParentId(this.currentLang, id).subscribe(result => {
     
      this.titleList = result;
      // this.titleList = result;
    });

  }
  initStaticData(currentLang) {
    let gender: Gender = new Gender();
    GENDERS.forEach(pair => {
      gender = { Id: pair.Id.toString(), Desc: (currentLang === 'et' ? pair.Description : pair.DescriptionEnglish) };
      this.genders.push(gender);

    });
  }


  ngOnInit() {
    this.createForm();
    this.initStaticData(this.currentLang);

  }
  createForm() {
    this.ProfileForm = this.fb.group({
      Tin: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      FirstName: [''],
      Title: [''],
      FirstNameEng: [''],
      FatherName: [''],
      FatherNameEng: [''],
      GrandName: [''],
      GrandNameEng: [''],
      MotherName: [''],
      MotherNameEng: [''],
      Nationality: [''],
      Gender: [''],
      CreatedDate: [''],
      BirthDate: [''],
    })
  }
  getUserProfileData() {
    const formModel = this.ProfileForm.value;
    return {
      FirstName: formModel.FirstName,
      FatherName: formModel.FatherName,
      GrandName: formModel.GrandName,
      FirstNameEng: formModel.FirstNameEng,
      FatherNameEng: formModel.FatherNameEng,
      GrandNameEng: formModel.GrandNameEng,
      MotherName: formModel.MotherName,
      MotherNameEng: formModel.MotherNameEng,
      Nationality: formModel.Nationality,
      Gender: formModel.Gender,
      Tin: formModel.Tin,
      Title: formModel.Title,
      CreatedDate: formModel.CreatedDate
    }
  }
  saveProfile() {
    console.log(this.getUserProfileData());
    // return this.userService.saveProfile(getUserProfileData()).subscribe((User :UserDTO)=>{

  }

}




