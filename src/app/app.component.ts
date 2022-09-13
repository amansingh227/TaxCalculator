import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 20;
  bufferValue = 5;
  selectedValue!: string;
  selectedCar!: string;

  calculator = new FormGroup({
  select: new FormControl('', ),
  amount: new FormControl(''),
  tax: new FormControl(''),
});

tax:string='0';
impot:string='0';
calculate(event:any){
if(event.target.value>0 && event.target.value<=50000){
  this.tax='0';
  this.impot='0';
  this.calculator.controls.tax.setValue(this.tax);
  this.calculator.controls.amount.setValue(this.impot);
}
else if(event.target.value >500000 && event.target.value < 1000000)
{
  this.tax='4';
  this.impot='(3/100)*(event.target.value-500000)';
  this.calculator.controls.tax.setValue(this.tax);
  this.calculator.controls.amount.setValue(this.impot);
}
else if(event.target.value>1000000)
{
  this.tax='4';
  this.impot= '((3/100)*500000)+((4/100)*(event.target.value-1000000))';
  this.calculator.controls.tax.setValue(this.tax);
  this.calculator.controls.amount.setValue(this.impot);
}
}
}
