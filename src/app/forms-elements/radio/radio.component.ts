import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatRadioButton, MatRadioGroup, MatRadioModule } from '@angular/material/radio';

@Component({
    selector: 'cust-radio',
    standalone: true,
    imports: [MatRadioModule, MatRadioGroup, MatRadioButton, ReactiveFormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div [formGroup]="formGroupText">
            <mat-radio-group aria-label="Select an option" [formControlName]="controlNameText">
                @for(radio of radioArray; track radio.id){
                    <mat-radio-button (change)="onChange(radio)" [value]="radio.value"
                    [checked]="radio.checked">{{radio.text}}</mat-radio-button>
                }
            </mat-radio-group>
        </div>
    `
})

export class CustRadio implements OnInit {

    @Input() formGroupText: any;
    @Input() controlNameText: any;
    @Input() radioArray: Array<any> = []
    @Input() label: string = '';

    @Output() valueChange: EventEmitter<any> = new EventEmitter<any>()

    constructor() { }
    ngOnInit(): void {

    }

    onChange(value: { text: string, id: number, value: string }) {
        console.log('TestToggleValue', value)
        this.valueChange.emit(value)
    }
}