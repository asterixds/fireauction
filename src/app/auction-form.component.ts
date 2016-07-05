import {OnInit, Component} from '@angular/core';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';
import {Router, CanDeactivate} from '@angular/router';
import {Auction} from './auction'
import {AuctionService} from './auction.service';


@Component({
    templateUrl: "app/auction-form.component.html",
    providers: [AuctionService]
})
export class AuctionFormComponent implements OnInit {
    form: ControlGroup;
    auction = new Auction(); //redunant model to form model
    products;

    constructor(private _router: Router,
        private _fb: FormBuilder,
        private _auctionService: AuctionService) {
        this.form = this._fb.group({
            title: ['', Validators.required],
            startingBid: ['', Validators.required],
            prodId: ['', Validators.required]
        });
    }

    ngOnInit() {
        this.products = this._auctionService.getProducts();
    }

    save(form: ControlGroup) {
        this._auctionService.createAuction(this.auction)
            .then(x => {
                //there seems no easy way to clear a form, so recreating it
                this.form = this._fb.group({
                    title: ['', Validators.required],
                    startingBid: ['', Validators.required],
                    prodId: ['', Validators.required]
                });
            });
             this._router.navigateByUrl('auctions');

    }
}