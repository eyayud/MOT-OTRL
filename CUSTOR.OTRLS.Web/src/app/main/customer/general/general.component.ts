import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BusinessService } from '../services/business.service';
import { BusinessDTO } from '../models/bussiness.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  generalBusinessForm : FormGroup
  businessTypes: BusinessDTO[] = [];
  currentLang : string = 'en';
  constructor(private fb: FormBuilder, 
    private businessService: BusinessService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.getBusinessTypes();
    this.createForm();
  }
  getBusinessTypes() {
    this.businessService.getBusinessBySelectedLanguage(this.currentLang).subscribe(result => {
      console.log(result);
      this.businessTypes = result;
    },
      error => {
        return this.toastr.error(error);
      });
  }

  createForm(){
    this.generalBusinessForm = this.fb.group({
      PreviousEnrollmentNumber: [''],
      RegistrationDate: [''],
      ArchiveNumber: [''],
      CompanyName: [''],
      CompanyNameEng: [''],
      CompanyNameRegion: [''],
      SignedCapital: [''],
      AssignedCapital: [''],
      PaidCapital: [''],
      StockValue: [''],
      EthiopianPeople: [''],
      BudgetCategory: [''],
      Status: [''],
    })
  }

}
