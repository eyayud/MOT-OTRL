export class Payment {
    constructor() {

    }
    public OrderNumber: number;
    public ReceiptNumber?: string;
    public PaymentMethod?: string;
    public TotalAmount?: string;
    public ServiceType?: string;
    
}
export class PaymentType {
    id: number;
    name: string;
}

export interface PayOutsModel {
  ServiceType: string;
  Price: number;
}
