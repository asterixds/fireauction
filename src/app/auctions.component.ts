import { OnInit, Component, ChangeDetectionStrategy  } from '@angular/core';
import { AngularFire, FirebaseAuth, FirebaseListObservable } from 'angularfire2';
import {Auction, Bid} from './auction';
import {Observable} from 'rxjs/observable';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {AuctionService} from "./auction.service";



@Component({
    moduleId: module.id,
    templateUrl: "auctions.component.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [AuctionService],
    changeDetection: ChangeDetectionStrategy.OnPush
})


export class AuctionsComponent {
    auctions: Observable<any[]>;
    user =null;
    selectedAuction;

    constructor( private _auth: FirebaseAuth,
        private _auctionService: AuctionService) {
        this._auth.subscribe(auth => {
            if (auth) {
                this.user = auth;
            }
            else {
                this.user = null;
            }
        });
        this.auctions = this._auctionService.getAuctions();                            
    }

    select(auction) {
        this.selectedAuction = auction;
    }
};

