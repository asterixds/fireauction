import { provideRouter, RouterConfig } from '@angular/router';
import {AuctionsComponent} from './auctions.component';
import {AuctionFormComponent} from './auction-form.component';
import { CanDeactivateGuard } from './interfaces';


export const routes: RouterConfig = [
  { path: 'auctions', component: AuctionsComponent },
  { path: 'newauction', component: AuctionFormComponent },
  { path: '', component: AuctionFormComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CanDeactivateGuard
];