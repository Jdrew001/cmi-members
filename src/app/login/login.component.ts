import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from '../core/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup | undefined; 

  constructor(
    private fb: FormBuilder,
    private authorizationService: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required)
    });
  }

  async submit() {
    let result = await this.authorizationService.login(this.formGroup.getRawValue());
    if (result.error) {
      console.log('issue resulted', result.data);
    }

    console.log('success user', this.authorizationService.user);
  }

  logout() {
    this.authorizationService.logout();
  }
}
