import DateTimeFormat = Intl.DateTimeFormat;

export class AddressModel {
  AddressId: number;
  ParentId: number;
  AddressType: number;
  IsMainOffice: boolean;
  SpecificAreaName: string;
  Region: string;
  Town: string;
  Zone: string;
  Woreda: string;
  Kebele: string;
  HouseNo: string;
  TeleNo: string;
  Pobox: string;
  Fax: string;
  CellPhoneNo: string;
  Email: string;
  OtherAddress: string;
  Remark: string;
  IsActive?: boolean;
  IsDeleted?: boolean;
  CreatedUserId: string;
  CreatedDate?: DateTimeFormat;
  CreatedBy: string;
  UpdatedUserId: string;
  UpdatedDate: DateTimeFormat;
  UpdatedBy: string;

}

export interface AddressListDTO {
  AddressId: number;
  ParentId: number;
  AddressType: number;
  IsMainOffice: boolean;
  SpecificAreaName: string;
  Region: string;
  Town: string;
  Zone: string;
  Woreda: string;
  Kebele: string;
  HouseNo: string;
  TeleNo: string;
  Pobox: string;
  Fax: string;
  CellPhoneNo: string;
  Email: string;
}
