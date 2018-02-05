import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { forEach } from '@angular/router/src/utils/collection';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.css']
})
export class ViewPrescriptionComponent implements OnInit {
  diseases;
  hospital;
  doctor;
  specility;
  date;
  selectedHospital;
  selectedDoctor;
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  hospitals = [
    {
      location: 'Colombo',
      lat: 6.9414763,
      lng: 79.87832219999996,
      hospitals: [
        {
          name: 'Nawaloka',
          lat: 6.921263,
          lng: 79.85312
        },
        {
          name: 'asiri',
          lat: 6.9203712,
          lng: 79.8658749
        },
        {
          name: 'national',
          lat: 6.919079699999999,
          lng: 79.86800540000002
        },
        {
          name: 'rathnam',
          lat: 6.9201137,
          lng: 79.85829549999994
        }
      ]
    }

  ];
  loadDataObject: any = {};
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  states = [
    {
      name: 'Diabetic',
      speciality: 'Endocrinologists',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Blue_circle_for_diabetes.svg',
      doctors: [
        { name: 'Dr.AJITH ABEYGUNASEKERA', value: 'Dr.AJITH ABEYGUNASEKERA' },
        { name: 'Dr.BINARA AMARASINGHE', value: 'Dr.BINARA AMARASINGHE' },
        { name: 'Dr.BINARA AMARASINGHE', value: 'Dr.BINARA AMARASINGHE' }
      ],
      hospitals: [
        { name: 'Asiri Central Hospital', value: 'Asiri Central Hospital' },
        { name: 'Golden Key Hospital', value: 'Golden Key Hospital' },
        { name: 'Nawaloka Hospitals PLC', value: 'Nawaloka Hospitals PLC' }
      ]
    },
    {
      name: 'Cholesterol',
      speciality: 'Cardiologists',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Heart_diagram_blood_flow_en.svg',
      doctors: [
        { name: 'Dr.Kasun Madusanka', value: 'Dr.Kasun Madusanka' },
        { name: 'Dr.Sanjewani Serasingha', value: 'Dr.Sanjewani Serasingha' },
        { name: 'Dr.Gethanjana Mendis', value: 'Dr.Gethanjana Mendis' },
        { name: 'Dr.Prageeth Ekanayake', value: 'Dr.Prageeth Ekanayake' }
      ],
      hospitals: [
        { name: 'Asiri Central Hospital', value: 'Asiri Central Hospital' },
        { name: 'Nawaloka Hospitals PLC', value: 'Nawaloka Hospitals PLC' }
      ]
    },
    {
      name: 'Pressure',
      speciality: 'hypertension',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Skull_and_brain_normal_human.svg',
      doctors: [
        { name: 'Dr.Senanayake Thisera', value: 'Dr.Senanayake Thisera' },
        { name: 'Dr.Shanika Herath', value: 'Dr.Shanika Herath' }
      ],
      hospitals: [
        { name: 'Asiri Central Hospital', value: 'Asiri Central Hospital' },
        { name: 'Golden Key Hospital', value: 'Golden Key Hospital' },
        { name: 'Nawaloka Hospitals PLC', value: 'Nawaloka Hospitals PLC' },
        { name: 'Rathnam Hospitals PLC', value: 'Rathnam Hospitals PLC' }
      ]
    },
    {
      name: 'heart disease',
      speciality: 'Cardiologist',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Heart_diagram_blood_flow_en.svg',
      doctors: [
        { name: 'Dr.Chanaka Madusanka', value: 'Dr.Chanaka Madusanka' }
      ],
      hospitals: [
        { name: 'Asiri Central Hospital', value: 'Asiri Central Hospital' }
      ]
    },
    {
      name: 'Skin diseases',
      speciality: 'Dermatologist',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Circle_of_Willis_en.svg',
      doctors: [
        { name: 'Dr.Nijanthan Lechchikumara', value: 'Dr.Nijanthan Lechchikumara' },
        { name: 'Dr.Dhanuka Perera', value: 'Dr.Dhanuka Perera' }
      ],
      hospitals: [
        { name: 'Centrel Hospital', value: 'Centrel Hospital' },
        { name: 'Nawaloka Hospitals PLC', value: 'Nawaloka Hospitals PLC' }
      ]
    },
    {
      name: 'Nervous system',
      speciality: 'Neurologist',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/TE-Nervous_system_diagram.svg',
      doctors: [
        { name: 'Dr.Sanjaya Madusanka', value: 'Dr.Sanjaya Madusanka' },
        { name: 'Dr.Chanaka Madusanka', value: 'Dr.Chanaka Madusanka' },
        { name: 'Dr.Niranjan Ekanayake', value: 'Dr.Niranjan Ekanayake' }
      ],
      hospitals: [
        { name: 'Nawaloka Hospitals PLC', value: 'Nawaloka Hospitals PLC' }
      ]
    }
  ];

  constructor(public dialog: MatDialog) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
      startWith(''),
      map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }


  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  // loadOtherData(gg) {
  //   if (gg !== null) {
  //     this.loadDataObject = gg;
  //   }
  // }

  openDialog(): void {
    // let dialogRef = this.dialog.open(TimeConfirmationComponent, {
    //   width: '60vh;',
    //   data: { doctor: this.selectedDoctor, hospital: this.selectedHospital, date: this.date, specility: this.specility }
    // });

  }

  doSearch() {
    for (let state of this.states) {
      if (state.name === this.diseases) {
        this.hospital = state.hospitals;
        this.specility = state.speciality;
        this.doctor = state.doctors;
      }
    }
  }

  ngOnInit() {
  }

}
