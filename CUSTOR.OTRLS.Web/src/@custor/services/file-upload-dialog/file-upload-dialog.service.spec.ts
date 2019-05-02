import { TestBed } from '@angular/core/testing';

import { FileUploadDialogService } from './file-upload-dialog.service';

describe('FileUploadDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileUploadDialogService = TestBed.get(FileUploadDialogService);
    expect(service).toBeTruthy();
  });
});
