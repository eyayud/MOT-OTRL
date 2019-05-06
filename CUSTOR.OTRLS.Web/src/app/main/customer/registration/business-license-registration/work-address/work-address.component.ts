import {Component, Input, OnInit} from '@angular/core';
import {AddressListDTO} from '../../../models/address.model';
import {SelectionModel} from '@angular/cdk/collections';
import {ArcWizardService} from '../../../services/arc-wizard/arc-wizard.service';
import {WizardComponent} from 'angular-archwizard';
import {BusinessApiService} from '../../../services/business.api.service';
import {ProgressBarService} from '../../../../../../@custor/services/progress-bar/progress-bar.service';

@Component({
  selector: 'app-work-address',
  templateUrl: './work-address.component.html',
  styleUrls: ['./work-address.component.scss']
})
export class WorkAddressComponent implements OnInit {
  // load instance of wizard component for programmatically do navigation
  @Input() wizard: WizardComponent;
  addresses: AddressListDTO[];
  displayedColumns: string[] = ['Select', 'IsMainOffice', 'CellPhoneNo', 'Region', 'Zone', 'Woreda', 'Kebele', 'HouseNo'];
  selection = new SelectionModel<AddressListDTO>(true, []);


  constructor(
    private arcWizardService: ArcWizardService,
    private apiService: BusinessApiService,
    private progressBarService: ProgressBarService) {
  }

  ngOnInit() {
    // mock address
    this.addresses = [
      {
        AddressId: 1,
        AddressType: 1,
        CellPhoneNo: '425345',
        Email: 'e@gmail.com',
        Fax: '24524',
        HouseNo: '25345',
        IsMainOffice: true,
        Kebele: 'kebele 1',
        ParentId: 1,
        Pobox: '52345',
        Region: 'region 1',
        SpecificAreaName: '',
        TeleNo: '52345345',
        Town: 'town 1',
        Woreda: 'woreda 1',
        Zone: 'zone 1'
      },
      {
        AddressId: 2,
        AddressType: 1,
        CellPhoneNo: '4425345',
        Email: 'z@gmail.com',
        Fax: '234524',
        HouseNo: '125345',
        IsMainOffice: false,
        Kebele: 'kebele 2',
        ParentId: 1,
        Pobox: '52345',
        Region: 'region 2',
        SpecificAreaName: '',
        TeleNo: '52345345',
        Town: 'tow 2',
        Woreda: 'woreda 2',
        Zone: 'zone 2'
      }
    ];
    console.log(this.addresses);
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.addresses.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.addresses.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: AddressListDTO): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.AddressId + 1}`;
  }

  saveAddresses(value) {
    // TODO: pass selected address to api
    this.apiService.saveApplication(value).subscribe(res => {
      this.progressBarService.triggerProgressBar(false);
      this.arcWizardService.triggerExitStepTwo(true);
    });

    this.arcWizardService.triggerExitStepTwo(true);
  }
}