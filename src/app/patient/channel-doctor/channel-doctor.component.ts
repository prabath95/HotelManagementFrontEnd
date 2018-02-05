import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-channel-doctor',
  templateUrl: './channel-doctor.component.html',
  styleUrls: ['./channel-doctor.component.css']
})
export class ChannelDoctorComponent implements OnInit {

  docName = this.data.doctor;
  hospital = this.data.hospital;
  specility = this.data.specility;
  date = this.datepipe.transform(this.data.date, 'yyyy-MM-dd');

  constructor(
    public dialogRef: MatDialogRef<ChannelDoctorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public datepipe: DatePipe
  ) { }

  foods = [
    { value: '10.30', viewValue: '10.30 AM' },
    { value: '5.30', viewValue: '5.30 PM' },
    { value: '6.30', viewValue: '6.30 PM' },
    { value: '7.30', viewValue: '7.30 PM' }
  ];

  onCloseConfirm() {
    this.dialogRef.close('Confirm');
  }
  onCloseCancle() {
    this.dialogRef.close('Cancle');
  }

  ngOnInit() {
  }
}
