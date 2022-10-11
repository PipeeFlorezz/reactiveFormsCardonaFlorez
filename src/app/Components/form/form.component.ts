import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() addAthlete: EventEmitter<any> = new EventEmitter<any>();

  public form: any;
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(15), this.ValidateAge()]],
      password: ['', [Validators.required]],
      skills: new FormArray([new FormControl])
    })
  }

  ngOnInit(): void {
    //this.skils;
  }

  Registrar(form: FormGroup): void {
    console.log(this.form.value);
    this.addAthlete.emit(this.form.value);
    form.reset();
  }

  get skils(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  addHability(): void {
    this.skils.push(new FormControl())
  }

  ValidateAge(): ValidatorFn {
    return (control: AbstractControl): { [key: string ]: any} | null => {
      return (!Number.isInteger(parseInt(control.value))) ? { failAge: true } : null;
    }
  }

}
