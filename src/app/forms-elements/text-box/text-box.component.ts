import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'cust-textBox',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [formGroup]="formGroupText" >
      <div class="class">
        @if(!readonly){
          <ng-container>
            <mat-form-field style="min-width: 74%; max-width: 74%; width: 100%;" appearance="fill">
            <mat-label>{{ label }}</mat-label>
            <input matInput #textBox (paste)="OnPaste($event)" (keyup)="setKeyUpValue(textBox.value)" autocomplete="off" [disabled]="disabled" [maxlength]=maxLength
            [value]="formGroupText.get('controlNameText')?.value"
            [formControlName]="controlNameText"
            [placeholder]="placeholder"
            [readonly]="readonly"
            [type]="type" />
            </mat-form-field>
          </ng-container>
        }
      </div>
    </div>
  `,
  styles: [`
    :host { display: block;}
    mat-form-field { width: 100%; }
  `]
})
export class TextBoxComponent implements OnInit {

  @Input({ required: true }) formGroupText!: FormGroup;
  @Input({ required: true }) controlNameText!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() minLength: number | null = null;
  @Input() maxLength: number | null = null;
  @Input() readonly: Boolean = false;
  @Input() disabled: Boolean | any = false;

  ngOnInit() {
    const validators = [];

    if (this.required) validators.push(Validators.required);
    if (this.minLength !== null) validators.push(Validators.minLength(this.minLength));
    if (this.maxLength !== null) validators.push(Validators.maxLength(this.maxLength));

    // if (validators.length) {
    //   this.control?.addValidators(validators);
    //   this.control?.updateValueAndValidity();
    // }
  }

  // helper getter — avoids repeating form.get() in template
  // get control() {
  //   return this.formGroupText.get(this.controlName);
  // }

  OnPaste(event: any) {
    // console.log('paste', event?.target.value);
  }
  setKeyUpValue(value: any) {
    // console.log('value', value);
  }

}