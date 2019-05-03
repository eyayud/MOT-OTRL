import { Payment , PaymentType} from '../models/payment.model'

export const PaymentOptions: PaymentType[] = [

    { id: 1, name: 'cash' },
    { id: 2, name: 'check' },
    { id: 3, name: 'CBE BIRR' },
    { id: 3, name: 'Amole' },

];

export const PaymentInfo : Payment [] = [
     { ServiceType: '1',OrderNumber: 1,ReceiptNumber: '01215001',  TotalAmount: '120.10'},
     { ServiceType: '2',OrderNumber: 1,ReceiptNumber: '01215001',  TotalAmount: '120.10'},
     { ServiceType: '3',OrderNumber: 1,ReceiptNumber: '01215001',  TotalAmount: '120.10'},
     { ServiceType: '4',OrderNumber: 1,ReceiptNumber: '01215001',  TotalAmount: '120.10'},
]