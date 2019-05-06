import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ContentHeaderModule} from '@custor/components/content-header/content-header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule, MatIconModule} from '@angular/material';
import {AccessDeniedComponent} from './denied.component';

export const routes = [
    { path: '', component: AccessDeniedComponent, pathMatch: 'full' }
  ];
@NgModule({
    declarations: [
        AccessDeniedComponent

    ],
    imports: [
        RouterModule.forChild(routes),
        ContentHeaderModule,
        CommonModule,
        MatCardModule, MatIconModule,
        FlexLayoutModule
      ]
    
  })
  export class DeniedModule { }
