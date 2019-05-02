import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  serviceForm: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.serviceForm = this.fb.group({
      LegalStatus: [''],
      StartDate: [''],
      ServiceNumber: [''],
      CompanyNameEng: [''],
      CompanyName: [''],
      Tin: [''],

      FirstName: [],
      FirstNameEng: [],
      FirstNameRegion: [],

      FatherName: [''],
      FatherNameEng: [''],
      FatherNameRegion: [''],

      GrandName: [''],
      GrandNameEng: [''],
      GrandNameRegion: [''],

      MotherName: [''],
      MotherNameEng: [''],
      MotherNameRegion: [''],
    });
  }

}
