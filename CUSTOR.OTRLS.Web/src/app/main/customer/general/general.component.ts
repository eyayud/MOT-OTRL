import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  selectedBusiness: any = [];
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
      AssignedCapital: [''],
      PaidCapital: ['',Validators.required],
      SignedCapital: ['',  Validators.required],

      SingleShareValue: [''],
      EthiopiansShare: [''],
      BudgetCategory: [''],
      
      RegistrationStatus: [''],
    })
  }
  addBusinessCategory(event, businessId, index) {
    if (event.checked) {
      this.selectedBusiness.push(businessId)
    }
    else {
      var removeIndex = this.selectedBusiness.indexOf(businessId)
      if (removeIndex !== -1)
        this.selectedBusiness.splice(removeIndex, 1);
    }
    console.log(this.selectedBusiness)
  }

  get SignedCapital(){
   return this.generalBusinessForm.get("SignedCapital")
  }
  get PaidCapital(){
    return this.generalBusinessForm.get("PaidCapital")
  }
  get BudgetCategory(){
    return this.generalBusinessForm.get("BudgetCategory")
  }
  get RegistrationStatus(){
    return this.generalBusinessForm.get("RegistrationStatus")
  }

}
