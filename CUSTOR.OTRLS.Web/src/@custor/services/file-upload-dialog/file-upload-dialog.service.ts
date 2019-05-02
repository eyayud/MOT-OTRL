import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadDialogService {
  // observable boolean sources
  private showFileUploadDialog = new Subject<boolean>();

  // observable boolean streams
  fileUploadDialogTriggered$ = this.showFileUploadDialog.asObservable();
  constructor() { }


  // commands
  triggerFileUploadDialog(trigger: boolean) {
    console.log(trigger);
    this.showFileUploadDialog.next(trigger);
  }
}
