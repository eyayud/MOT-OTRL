import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ContentHeaderModule} from '@custor/components/content-header/content-header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule, MatIconModule} from '@angular/material';
import {NotFoundComponent} from './not-found.component';

export const routes = [
    { path: '', component: NotFoundComponent, pathMatch: 'full' }
  ];
@NgModule({
    declarations: [
        NotFoundComponent

    ],
    imports: [
        RouterModule.forChild(routes),
        ContentHeaderModule,
        CommonModule,
        MatCardModule, MatIconModule,
        FlexLayoutModule
      ]
    
  })
  export class NotFoundModule { }
