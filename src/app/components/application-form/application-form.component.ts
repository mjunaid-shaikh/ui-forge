import { Component, OnInit } from '@angular/core';
import { TextBoxComponent } from '../../forms-elements/text-box/text-box.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { zip } from 'rxjs';
import { CustRadio } from '../../forms-elements/radio/radio.component';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [TextBoxComponent, ReactiveFormsModule, FormsModule, CustRadio],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent implements OnInit {

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
      gender: this.applicationForm.get('gender')?.value
    }
    console.log('Application Form', reqObj)

  }

  getRadioEvent(value: any) {
    this.applicationForm.get('gender')?.setValue(value.name)
  }

}
