import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource, PageEvent} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {AngConfirmDialogComponent} from '@custor/components/confirm-dialog/confirm-dialog.component';
import {Utilities} from '@custor/helpers/utilities';
import {ActivatedRoute, Router} from '@angular/router';
import {ManagerListDTO, ManagerParameters} from '../models/manager.model';
import {ManagerService} from '../services/manager.service';
import {ConfigurationService} from '@custor/services/configuration.service';
import { PaginationService } from '@custor/services/pagination.service';
import {KeyConverstorService} from 'app/common/services/key-convertor.service';
import { locale as langEnglish } from '../../lang/en';
import { locale as langEthiopic } from '../../lang/et';
import { TranslationLoaderService } from '@custor/services/translation-loader.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss']
})
export class ManagerListComponent implements OnInit, AfterViewInit {
  pageEvent: PageEvent;
  totalCount = 0;
  managers: ManagerListDTO[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isInvestor: boolean;
  displayedColumns = ['ManagerId', 'FullName', 'FullNameEng', 'Gender', 'Nationality', 'Actions'];
  dataSource: MatTableDataSource<ManagerListDTO>;

  loadingIndicator: boolean;
  dialogRef: any;
  confirmDialogRef: MatDialogRef<AngConfirmDialogComponent>;
  

  constructor(private managerService: ManagerService,
              private toastr: ToastrService,
              public dialog: MatDialog,  private translationLoaderService: TranslationLoaderService,
              private router: Router, private configService: ConfigurationService,
              public paginationService: PaginationService,  private convertorService: KeyConverstorService,
              private route: ActivatedRoute) {
                  this.translationLoaderService.loadTranslations(langEnglish, langEthiopic);
  }

  ngOnInit() {
    this.getManagersByCustomerId();
  }
 getGender(val: any){
      return this.convertorService.getGender(val);
   
}
  switchPage(event: PageEvent) {
    this.paginationService.change(event);
    this.getManagersByCustomerId();
}
  getManagersByCustomerId() {
    this.loadingIndicator = true;
   
    this.managerService.getManagers(this.getManagerParameters())
      .subscribe((result: any) => {
          console.log(result);
          this.managers = result.Items;
          if (!this.managers) {
            this.toastr.error('No records were found to list', 'Error', {
              closeButton: true,
            });
          } else {
            this.dataSource = new MatTableDataSource( this.managers);
            if (this.totalCount === 0) {
                this.totalCount = result.ItemsCount;
            }
          }
        }
        // ,
        // error => {
        //   this.toastr.error(`Error: "${Utilities.getHttpResponseMessage(error)}"`);
        // }
        );
    this.loadingIndicator = false;
  }

  private getManagerParameters(): ManagerParameters {
      const params = new ManagerParameters();
      params.CustomerId = 1, // hardcoded for now
      params.PageIndex = this.paginationService.page;
      params.PageSize = this.paginationService.pageCount;
      params.Lang = this.configService.language;
      return params;
  }

  ngAfterViewInit() {
//
  }

  editManager(manager: ManagerListDTO) {
    if (manager) {
        this.router.navigate(['/main/customer/manager/', manager.ManagerId], {relativeTo: this.route});
      } else {
        this.router.navigate(['/main/customer/manager', 0]);
      }
  }

  confirmDelete(manager: ManagerListDTO) {
    this.confirmDialogRef = this.dialog.open(AngConfirmDialogComponent,
      {
        disableClose: false
      });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
    this.confirmDialogRef.afterClosed().subscribe(result => {
      this.loadingIndicator = true;
      if (result) {
        this.managerService.deleteManager(manager.ManagerId)
          .subscribe(results => {
              this.loadingIndicator = false;
              this.dataSource.data = this.dataSource.data.filter(item => item !== manager);
            },
            // error => {
            //   // tslint:disable-next-line:max-line-length
            //   this.toastr.error(
            //     `An error occured whilst deleting the manager.\r\nError: "${Utilities.getHttpResponseMessage(error)}"`,
            //     'Delete Error');
            // }
            );
      }
      this.loadingIndicator = false;
    });
  }
 
}
