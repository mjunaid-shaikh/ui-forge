import { Component, OnInit } from '@angular/core';
import { TextBoxComponent } from '../../forms-elements/text-box/text-box.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { zip } from 'rxjs';
import { CustRadio } from '../../forms-elements/radio/radio.component';
import { DatePickerComponent } from '../../forms-elements/date-picker/date-picker.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [TextBoxComponent, ReactiveFormsModule, FormsModule, CustRadio, DatePickerComponent],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent implements OnInit {

  pipe = new DatePipe('en-US');

  applicationForm: FormGroup = new FormGroup({});

  radioArray: Array<any> = [
    { text: 'Male', id: 1, value: 'Male' },
    { text: 'Female', id: 2, value: 'Female' },
    { text: 'Other', id: 3, value: 'Other' },
  ]
  // toggleArray: Array<any> = [
  //   { name: 'Mumbai', id: 1, value: 'Mumbai' },
  //   { name: 'Bengaluru', id: 2, value: 'Bengaluru' },
  //   { name: 'Hydrabad', id: 3, value: 'Hydrabad' },
  //   { name: 'Delhi', id: 4, value: 'Delhi' },
  //   { name: 'Chennai', id: 5, value: 'Chennai' },
  // ]



  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

    this.applicationForm = this.fb.group({
      fullName: ['', []],
      email: ['', []],
      phone: ['', []],
      city: ['', []],
      state: ['', []],
      zip: ['', []],
      gender: ['', []],
      startDate: ['', []],
    })


  }

  getApplicationValue() {

    let reqObj = {
      fullName: this.applicationForm.get('fullName')?.value,
      email: this.applicationForm.get('email')?.value,
      phone: this.applicationForm.get('phone')?.value,
      address: {
        city: this.applicationForm.get('city')?.value,
        state: this.applicationForm.get('state')?.value,
        zip: this.applicationForm.get('zip')?.value,
      },
      gender: this.applicationForm.get('gender')?.value,
      startDate: this.formatDDMMYYYY(this.applicationForm.get('startDate')?.value)
    }
    console.log('Application Form', reqObj)

  }

  getRadioEvent(value: any) {
    this.applicationForm.get('gender')?.setValue(value.name)
  }

  getStartDate(value: any) {
    console.log('Text', value);
    // this.applicationForm.get('startDate')?.setValue(value)
  }

  formatDDMMYYYY(date: Date): string {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');    // getDate() → day of month
    const month = String(d.getMonth() + 1).padStart(2, '0'); // getMonth() → 0-based, so +1
    const year = String(d.getFullYear());                 // getFullYear() → 2024
    return `${day}/${month}/${year}`;
  }

  // formatDDMMYYYY(date: Date): string {
  //   return this.pipe.transform(date, 'dd/MM/yyyy') ?? '';
  // }


}
