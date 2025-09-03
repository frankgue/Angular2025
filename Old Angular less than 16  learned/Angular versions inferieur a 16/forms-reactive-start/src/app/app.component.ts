import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projectStatus = ['Stable', 'Critical', 'Finished'];
  signupForm: FormGroup;
  forbiddenProjectsName = ['test'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName.bind(this)], CustomValidators.asyncInvalidProjectName
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('Critical'),
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  forbiddenProjectNameValidator(control: FormControl): { [s: string] : boolean } {
    if (this.forbiddenProjectsName.indexOf(control.value) !== -1) {
      return { forbiddenProjectName: true };
    }
    return null;
  }

  forbiddenProjectNameValidatorAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({ forbiddenProjectName: true });
        }
        resolve(null);
      }, 1500);
    });
    return promise;
  }
}
