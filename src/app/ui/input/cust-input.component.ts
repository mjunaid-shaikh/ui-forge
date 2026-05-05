import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'cust-input',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [formGroup]="form">
      <mat-form-field appearance="outline" class="w-100">
        <mat-label>{{ label }}</mat-label>
        <input matInput 
          [formControlName]="controlName"
          [formGroup]="form"
          [placeholder]="placeholder"
          [type]="type" />

        <!-- required asterisk hint -->
        <!-- <mat-hint *ngIf="required">* Required</mat-hint> -->

        <!-- validation error messages -->
        <!-- <mat-error *ngIf="control?.hasError('required')">
          {{ label }} is required
        </mat-error>
        <mat-error *ngIf="control?.hasError('minlength')">
          Minimum {{ minLength }} characters required
        </mat-error>
        <mat-error *ngIf="control?.hasError('maxlength')">
          Maximum {{ maxLength }} characters allowed
        </mat-error> -->

      </mat-form-field>
    </div>
  `,
  styles: [`
    :host { display: block; }
    mat-form-field { width: 100%; }
  `]
})
export class CustInputComponent implements OnInit {

  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) controlName!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() minLength: number | null = null;
  @Input() maxLength: number | null = null;

  ngOnInit() {
    const validators = [];

    if (this.required) validators.push(Validators.required);
    if (this.minLength !== null) validators.push(Validators.minLength(this.minLength));
    if (this.maxLength !== null) validators.push(Validators.maxLength(this.maxLength));

    if (validators.length) {
      this.control?.addValidators(validators);
      this.control?.updateValueAndValidity();
    }
  }

  // helper getter — avoids repeating form.get() in template
  get control() {
    return this.form.get(this.controlName);
  }

}