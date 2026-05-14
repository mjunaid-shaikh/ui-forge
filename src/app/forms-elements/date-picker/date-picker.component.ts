import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


@Component({
    selector: 'cust-datepicker',
    imports: [ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule],
    standalone: true,
    template: `
    <div [formGroup]="formGroupText">
     <mat-form-field>
        <mat-label>{{custValue}}</mat-label>
        <input #ref [formControlName]="controlNameText" matInput [matDatepicker]="picker" (click)="reOpenCalendar()" (dateChange)="onChange(ref.value);">
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
     </mat-form-field>
    </div>
    `,
    styles: [],
})

export class DatePickerComponent implements OnInit {

    @Input() formGroupText: any;
    @Input() controlNameText: any;
    @Input() custValue: any;

    @ViewChild('picker') picker: any

    @Output() valueChange = new EventEmitter();


    ngOnInit(): void {
    }

    reOpenCalendar() {
        // if (!this.readonly) {
        // this.picker.open();
        // }
    }

    onChange(values: any) {
        this.valueChange.emit(values)
    }
}