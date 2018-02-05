import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PaymentConfirmationComponent } from '../payment-confirmation/payment-confirmation.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  foods = [
    { value: 'americanExpress', viewValue: 'American Express' },
    { value: 'visa', viewValue: 'Visa Card' },
    { value: 'master', viewValue: 'Master Card' }
  ];
  animal: String;
  name: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PaymentConfirmationComponent, {
      width: '40vh;',
      data: { name: this.name, animal: this.animal }
    });

  }
}
