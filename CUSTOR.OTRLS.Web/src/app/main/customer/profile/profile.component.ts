import { Component, OnInit ,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LookUpService } from '../../../common/services/look-up.service';
import { UserProfile } from '../models/user.model';
import { UserService } from '../services/user.service';
import { AddressService } from '../../../common/services/address.service';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';
import { AppTranslationService } from '../../../../@custor/services/translation.service';
import { Gender, LegalStatus, Lookup } from '../../../common/models/lookup.model';
import { ALPHABET_WITHSPACE_REGEX, GENDERS, LEGAL_STATUSES } from '../../../common/constants/consts';
import { ToastrService } from 'ngx-toastr';
import { StaticData, StaticData2 } from '../../../common/models/static-data.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ProfileForm: FormGroup;
  currentLang = 'en';
  user: UserProfile;
  AllowCascading = true;
  countryList=[];
  titleList =[];
  genders: Gender[] = [];
  regions: StaticData2[] = [];
  zones: StaticData2[] = [];
  filteredZones: StaticData2[] = [];
  woredas: StaticData2[] = [];
  filteredWoredas: StaticData2[] = [];
  kebeles: StaticData2[] = [];
  filteredKebeles: StaticData2[] = [];
  // @Input() errors: string[] = [];

  userProfile = "";
  isNewUser :boolean;
  loadingIndicator :boolean;
  constructor(
    private fb: FormBuilder, private lookUpService: LookUpService,
    private configService: ConfigurationService,
    private userService: UserService,
    private addressService: AddressService,
    private translationService: AppTranslationService,
    private toastr: ToastrService, private activatedRoute: ActivatedRoute,)
     {

 // Initializing data
    this.currentLang = this.configService.language;
    this.translationService.changeLanguage(this.configService.language);
    const countryLookupType = 8;
    const titleLookupType = 89;
    this.currentLang = this.configService.language;
    this.getTitles(titleLookupType);
    this.getCountries(countryLookupType);

// Initializing data
   this.getUserData();
     
  }
  getUserData(){
    //const userId = this.activatedRoute.snapshot.params.id;
    const userId = 20;
    this.userService.getUserProfile(userId).subscribe(result => {
      this.user = result;
      console.log(this.user)
      if (result == null) {
        this.isNewUser = true;
      } else {
        this.isNewUser = false;
        this.updateForm();
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
    this.fillAddressLookups();
    this.initStaticData(this.currentLang);
  

  }
  fillAddressLookups() {
    const countryLookupType = 8;
    const titleLookupType = 89;
    // to-do
    // bring all in one go
    // caching
    this.getRegions();
    this.getAllZones();
    this.getAllWoredas();
    this.getTitles(titleLookupType);
    this.getCountries(countryLookupType);
  }
  getRegions() {
    this.addressService.getRegionsByLang(this.currentLang)
      .subscribe(result => {
        console.log(result);
        this.regions = result;
      },
        error => {
          return this.toastr.error(error);
        });
  }

  getAllZones() {
    this.addressService.getAllZonesByLang(this.currentLang)
      .subscribe(z => {
        this.zones = z;
        if (this.zones) {
          this.filterRegion('');
        }
      },
        error => this.toastr.error(error));
  }

  getAllWoredas() {
    this.addressService.getAllWoredasByLang(this.currentLang)
      .subscribe(result => {
        this.woredas = result;
        // alert (result.length);
        if (this.woredas) {
          this.filterZone('');
        }
      },
        error => this.toastr.error(error));
  }

  // very expensive!
  getAllKebeles() {
    this.addressService.getAllKebelesByLang(this.currentLang)
      .subscribe(result => {
        this.kebeles = result;
        if (this.kebeles) {
          this.filterWoreda('');
        }
      },
        error => this.toastr.error(error));
  }
  filterRegion(regionCode: string) {
    if (!regionCode || !this.AllowCascading) {
      return;
    }
    this.filteredKebeles = null;
    this.filteredWoredas = null;
    if (!this.zones) {
      return;
    }
    this.filteredZones = this.zones.filter((item) => {
      return item.ParentId === regionCode;
    });
  }

  filterZone(zoneCode: string) {
    if (!zoneCode || !this.AllowCascading) {
      return;
    }
    this.filteredKebeles = null;
    this.filteredWoredas = this.woredas.filter((item) => {
      return item.ParentId === zoneCode;
    });
  }

  filterWoreda(woredaCode: string) {
    if (!woredaCode || !this.AllowCascading) {
      return;
    }
    this.getKebeleByWoredaId(woredaCode);
  }
  getKebeleByWoredaId(woredaId: any) {
    this.addressService.getKebelesByWoreda(this.configService.language, woredaId)
      .subscribe(result => {
        // this.kebeles = result;
        this.filteredKebeles = result;
      });
  }

  createForm() {
    this.ProfileForm = this.fb.group({
      Tin: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      FirstName: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      Title: [''],
      FirstNameEng: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],
      FirstNameRegion: ['', [Validators.compose([Validators.required, Validators.minLength(2),
      Validators.pattern(ALPHABET_WITHSPACE_REGEX)])]],

      FatherName: ['', [Validators.required]],
      FatherNameEng: ['', [Validators.required]],
      FatherNameRegion: ['', [Validators.required]],

      GrandName: ['', [Validators.required]],
      GrandNameEng: ['', [Validators.required]],
      GrandNameRegion: ['', [Validators.required]],
      
      MotherName: ['', [Validators.required]],
      MotherNameEng: ['', [Validators.required]],
      MotherNameRegion: ['', [Validators.required]],

      Nationality: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      CreatedDate: [''],
      BirthDate: ['',[Validators.required]],
      address: new FormGroup({
        ParentId: new FormControl(),
        RegionId: new FormControl(),
        ZoneId: new FormControl(),
        WoredaId: new FormControl(),
        KebeleId: new FormControl(),
        OtherAddress: new FormControl(),
        CellPhoneNo: new FormControl(),
        HouseNo: new FormControl(),
        TeleNo: new FormControl(),
        Fax: new FormControl(),
        Pobox: new FormControl(),
        Email: new FormControl(),
        Remark: new FormControl()
      })
    })
  }
  updateForm(){
    this.ProfileForm.patchValue({
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
    this.ProfileForm.get('address').patchValue({
        RegionId: this.user.RegionId == null ? '' : this.user.RegionId.toString(),
      //  ZoneId: this.user.ZoneId == null ? '' : this.user.ZoneId.toString(),
      //  WoredaId: this.user.WoredaId == null ? '' : this.user.WoredaId.toString(),
      //  KebeleId: this.user.KebeleId == null ? '' : this.user.KebeleId.toString(),
      //  HouseNo: this.user.HouseNo || '',
      //  TeleNo: this.user.TeleNo || '',
      //  Pobox: this.user.Pobox || '',
      //  Fax: this.user.Fax || '',
      //  CellPhoneNo: this.user.CellPhoneNo || '',
      Email: this.user.Email || '',
      //  OtherAddress: this.user.OtherAddress || ''
    });
  }
  getUserProfileData() {
    const formModel = this.ProfileForm.value;
    const add = this.ProfileForm.get('address').value;
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

      Nationality: formModel.Nationality,
      Gender: formModel.Gender,
      Tin: formModel.Tin,
      Title: formModel.Title,
      BirthDate: formModel.BirthDate,
      RegionId: add.RegionId,
      ZoneId: add.ZoneId,
      WoredaId: add.WoredaId,
      KebeleId: add.KebeleId,
      HouseNo: add.HouseNo,
      TeleNo: add.TeleNo,
      Pobox: add.Pobox,
      Fax: add.Fax,
      CellPhoneNo: add.CellPhoneNo,
      Email: add.Email,
      OtherAddress: add.OtherAddress,
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
      // this.errors = [];
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
  get MotherName(){
    return this.ProfileForm.get("MotherName");
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
  get MotherNameEng() {
    return this.ProfileForm.get("MotherNameEng");
  }

  get FirstNameRegion(){
    return this.ProfileForm.get('FirstNameRegion');
  }
  get FatherNameRegion() {
    return this.ProfileForm.get('FatherNameRegion');
  }
  get GrandNameRegion() {
    return this.ProfileForm.get("GrandNameRegion");
  }
  get MotherNameRegion() {
    return this.ProfileForm.get("MotherNameRegion");
  }

  get Gender(){
    return this.ProfileForm.get("Gender");
  }
  get Nationality(){
    return this.ProfileForm.get("Nationality");
  }
  get region() {
    return this.ProfileForm.get('RegionId');
  }

  get zone() {
    return this.ProfileForm.get('ZoneId');
  }

  get woreda() {
    return this.ProfileForm.get('WoredaId');
  }

  get kebele() {
    return this.ProfileForm.get('KebeleId');
  }

  get houseNumber() {
    return this.ProfileForm.get('HouseNo');
  }

  get phoneDirect() {
    return this.ProfileForm.get('PhoneDirect');
  }

  get CellPhoneNo() {
    return this.ProfileForm.get('CellPhoneNo');
  }

  get fax() {
    return this.ProfileForm.get('Fax');
  }

  get pobox() {
    return this.ProfileForm.get('POBox');
  }
  get Email (){
    return this.ProfileForm.get('POBox');
  }
  get legalStatus() {
    return this.ProfileForm.get('LegalStatus');
  }

  get tradeName() {
    return this.ProfileForm.get('TradeName');
  }

  // get BirthDate(){
  //   return this.ProfileForm.get("BirthDate");
  // }


}




