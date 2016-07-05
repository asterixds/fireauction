import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {  AppComponent, environment } from './app/';
import {AuctionsComponent} from './app/auctions.component';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig,AuthMethods, AuthProviders } from 'angularfire2';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';


if (environment.production) {
  enableProdMode();
}


bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,APP_ROUTER_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "XXX",
    authDomain: "XXX",
    databaseURL: "XXX",
    storageBucket: "XXX",

  })
]);



