import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PrerequisiteService } from '../services/prerequisite.service'

@Component({
  selector: 'app-registration-document',
  templateUrl: './registration-document.component.html',
  styleUrls: ['./registration-document.component.scss']
})
export class RegistrationDocumentComponent implements OnInit {
  // documentForm: FormGroup;
  serviceId : any = 1;

  servicePreList: PrerequisiteService[] = [];
  constructor(public preRequisite: PrerequisiteService) { }

  displayedColumns: string[] = ['No','Description',  'Action'];
  // dataSource = ELEMENT_DATA;
  ngOnInit() {
    this.getServicePrerequisite(this.serviceId);
    console.log("hello")
  }
  getServicePrerequisite(id: any) {
    this.preRequisite
      .servicePrerequisiteByServiceId(id)
      .subscribe(result => {
          this.servicePreList = result;
        console.log(this.servicePreList)
      });
  }

}
