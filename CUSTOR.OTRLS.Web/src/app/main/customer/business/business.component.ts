import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BusinessDTO } from '../models/bussiness.model';
import { BusinessService } from '../services/business.service';
import { AddressService } from '../../../common/services/address.service';
import { ConfigurationService } from '../../../../@custor/services/configuration.service';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppTranslationService } from '../../../../@custor/services/translation.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  serviceForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.serviceForm = this.fb.group({
      LegalStatus :[''],
      StartDate :[''],
      ServiceNumber:[''],
      CompanyNameEng:[''],
      CompanyName:[''],
      Tin:[''],

      FirstName :[],
      FirstNameEng:[],
      FirstNameRegion:[],

      FatherName: [''],
      FatherNameEng: [''],
      FatherNameRegion: [''],

      GrandName: [''],
      GrandNameEng: [''],
      GrandNameRegion: [''],

      MotherName: [''],
      MotherNameEng: [''],
      MotherNameRegion: [''],
    })
  }

}
