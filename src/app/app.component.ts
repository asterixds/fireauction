import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuctionsComponent} from './auctions.component';
import { AngularFire,FirebaseAuth, FIREBASE_PROVIDERS, AuthMethods, AuthProviders } from 'angularfire2';


@Component({
  selector: 'app-root',
  templateUrl: "app/app.component.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [FIREBASE_PROVIDERS]
})

export class AppComponent {
  title = 'Auction Router';
  auth;

  constructor(private _auth: FirebaseAuth) {
    _auth.subscribe(auth => {
      if (auth) {
        this.auth = auth;
      } else {
        this.auth = null;
      }
    });
  }

  login() {
    this._auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  logout() {
    this._auth.logout();
  }

  overrideLogin() {
    console.log("todo: implement email login");
  }

}
