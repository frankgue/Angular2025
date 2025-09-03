import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'test') {
      return { forbiddenProjectName: true };
    }
    return null;
  }

  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ forbiddenProjectName: true });
        }
        resolve(null);
      }, 1500);
    });
    return promise;
  }
}
