import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, User, UserCredential } from '@angular/fire/auth';
import { LoginModel } from 'src/app/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private _user: User;
  get user(): User {return this._user; }
  set user(user: User) { this._user = user; }

  constructor(
    private auth: Auth
  ) { }

  async login(body: LoginModel) {
    let result: {error: boolean, data: UserCredential} = null;
    try {
      result = {error: false, data: await signInWithEmailAndPassword(this.auth, body.email, body.password)} 
      this.user = result.data.user;
    } catch(e) {
      console.log('error', e);
      return {error: true, data: result};
    }

    return result;
  }

  logout() {
    this.auth.signOut().then(o => o);
  }
}
