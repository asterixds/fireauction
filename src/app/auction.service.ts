import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/observable';
import {Auction} from './auction'
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AuctionService {
  // FirebaseListObservable is used rather than just Observable as this tracks bi-directional updates.

  constructor(private _af: AngularFire) {
  }

  // Returns a list of all auctions for use in our list page.
  getAuctions() {
    return this._af.database.list('/auctions')
      .map(auctions => {
        return  auctions.map(auction => {
            auction.bids = this._af.database.list(`/bids/${auction.$key}`)
            return auction;
          });
      })
  }

  // Returns a single auction for use in our detail page
  getAuction(key) {
    return this._af.database.list("bids/" + key);
  }

  createAuction(auction: Auction) {
    return this._af.database.list('auctions').push(auction);
  };

  getProducts() {
    return [
      { id: 1, label: 'Product 1',imageUrl:'http://lorempixel.com/80/80/technics/1' },
      { id: 2, label: 'Product 2',imageUrl:'http://lorempixel.com/80/80/technics/2' },
      { id: 3, label: 'Product 3',imageUrl:'http://lorempixel.com/80/80/technics/3' }
    ];
  }

}