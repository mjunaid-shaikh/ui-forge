import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationFormComponent } from './components/application-form/application-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, ApplicationFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ui-forge';

  constructor(private fb: FormBuilder) {

  }

  myForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
  }

}
