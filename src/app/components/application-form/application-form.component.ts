import { Component, OnInit } from '@angular/core';
import { TextBoxComponent } from '../../forms-elements/text-box/text-box.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { zip } from 'rxjs';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [TextBoxComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent implements OnInit {

  applicationForm: FormGroup = new FormGroup({});




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
    })


  }

  getApplicationValue() {
    console.log('Application Form', this.applicationForm.value)
  }

}
