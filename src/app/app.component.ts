import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustInputComponent } from './ui/input/cust-input.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustInputComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ui-forge';

  constructor(private fb: FormBuilder) {

  }

  myForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fullName: ['', []]
    })
  }

  getValue() {
    console.log(this.myForm.value)
  }
}
