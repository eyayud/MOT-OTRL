import { Component, OnInit ,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LookUpService } from '../../../common/services/look-up.service';
import { UserProfile } from '../models/user.model';
import { UserService } from '../services/user.service';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { Gender, LegalStatus, Lookup } from '../../../common/models/lookup.model';
import { ALPHABET_WITHSPACE_REGEX, GENDERS, LEGAL_STATUSES } from '../../../common/constants/consts';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ProfileForm: FormGroup;
  currentLang = 'en';
  user: UserProfile;
  countryList=[];
  titleList =[];
  genders: Gender[] = [];
  @Input() errors: string[] = [];
  userProfile = "";
  isNewUser :boolean;
  loadingIndicator :boolean;
  constructor(private fb: FormBuilder, private lookUpService: LookUpService,
    private configService: ConfigurationService,
    private userService: UserService,
    private toastr: ToastrService) {


 // Initializing data
    const countryLookupType = 8;
    const titleLookupType = 89;
    this.currentLang = this.configService.language;
    this.getTitles(titleLookupType);
    this.getCountries(countryLookupType);

// Initializing data
    this.userService.getUserProfile(2).subscribe(result => {
      this.user = result;
      console.log(this.user)
      if (result == null) {
        this.isNewUser = true;
      } else {
        this.isNewUser = false;
        this.updateForm();
        // this.managerId = id;
        // this.imgPhoto = this.configService.baseUrl + 'photo/Mgr' + this.manager.ManagerId + '.jpg'; // to-do put the path in config
      }
    })
     
  }
  private getCountries(id: any) {
    this.lookUpService.getLookupByParentId(this.currentLang, id).subscribe(result => {
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
  // hasError(name:string){
  //   return name;
  // }

  ngOnInit() {
    this.createForm();
    this.initStaticData(this.currentLang);
  

  }
  createForm() {
    this.ProfileForm = this.fb.group({
      Tin: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      FirstName: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      Title: [''],
      FirstNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      FatherName: ['', [Validators.required]],
      FatherNameEng: ['', [Validators.required]],
      GrandName: ['', [Validators.required]],
      GrandNameEng: ['', [Validators.required]],
      MotherName: ['', [Validators.required]],
      MotherNameEng: ['', [Validators.required]],
      Nationality: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      CreatedDate: [''],
      BirthDate: ['',[Validators.required]],
    })
  }
  updateForm(){
    this.ProfileForm.patchValue({
      Tin: this.user.Tin || '',
      FirstName: this.user.FirstName || '',
      FatherName: this.user.FatherName || '',
      GrandName: this.user.GrandName || '',
      FirstNameEng: this.user.FirstNameEng || '',
      FatherNameEng: this.user.FatherNameEng || '',
      GrandNameEng: this.user.GrandNameEng || '',
      MotherName: this.user.MotherName || '',
      MotherNameEng: this.user.MotherNameEng || '',
      BirthDate: this.user.BirthDate || '',
      Nationality: this.user.Nationality == null ? '' : this.user.Nationality.toString(),
      Gender: this.user.Gender == null ? '' : this.user.Gender.toString(),
      Title: this.user.Title || '',
    });
  }
  getUserProfileData() {
    const formModel = this.ProfileForm.value;
    return {
      Id: 2,
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
      BirthDate: formModel.BirthDate,
    }
  }
  updateProfile() {
    console.log(this.getUserProfileData());
    // return this.userService.saveProfile(getUserProfileData()).subscribe((User :UserDTO)=>{

  }
  public onSubmit() {
    console.log("on submit")
    console.log("on submit")
    // if (!this.ProfileForm.valid) {
    //   // // console.log('error!!');
    //   return;
    // }
    // console.log(this.imgBase64);
    return this.userService.saveProfile(this.getUserProfileData())
      .subscribe((user: UserProfile) => {
        this.saveCompleted(user);
      },
        err => this.handleError(err)
      );
  }
  private saveCompleted(user?: UserProfile) {
    if (user) {
      this.user = user;
    }
    console.log(this.user)
    // this.isNewManager = false;
    // this.loadingIndicator = false;
    this.toastr.success('Record saved successfully!');
    // this.router.navigate(['/main/customer/manager-list']);
  }
  private handleError(error) {

    this.loadingIndicator = false;
    // const errList = Utilities.getHttpResponseMessage(error);
    if (error.status === 400) { // bad request (validation)
      // this.errors = errList;
      this.toastr.error('Please fix the listed errors', 'Error');
    } else {
      this.errors = [];
      // this.toastr.error(error.status + ':' + errList[0].toString(), 'Error');
    }
  }
  get Tin(){
    return this.ProfileForm.get("Tin");
  }
  get FirstName() {
    return this.ProfileForm.get('FirstName');
  }
  get FatherName(){
    return this.ProfileForm.get('FatherName');
  }
  get GrandName(){
    return this.ProfileForm.get("GrandName");
  }
  get FirstNameEng(){
    return this.ProfileForm.get('FirstNameEng');
  }
  get FatherNameEng() {
    return this.ProfileForm.get('FatherNameEng');
  }
  get GrandNameEng() {
    return this.ProfileForm.get("GrandNameEng");
  }
  get Gender(){
    return this.ProfileForm.get("Gender");
  }
  get Nationality(){
    return this.ProfileForm.get("Nationality");
  }
  // get BirthDate(){
  //   return this.ProfileForm.get("BirthDate");
  // }


}




