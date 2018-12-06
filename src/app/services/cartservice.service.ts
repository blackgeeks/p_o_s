import {Injectable} from '@angular/core';
import {Item} from '../sharedclasses/invoiceitems';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class CartserviceService {

    public items: Array<Item> = [];


    subTotal: number;
    tax: any;
    grandTotal: number;

    constructor(private storage: Storage) {
        this.subTotal = 0;
        this.tax = 0;
        this.grandTotal = 0;

        this.storage.get('branch').then((data) => {

            this.tax = data.tax;
            console.log(this.tax);


            if (data) {
                console.log(data);
            }
        });
    }

    public setItem(name: any, serving: any, itemPrice: number, count: number) {
        let item = new Item(name, serving, itemPrice, count);
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    removeItemfromcart(item: any) {
        console.log(item);
        console.log(this.items);

        let index = this.items.findIndex(obj => obj.itemName === item.itemName);
        console.log(index);
        if (index > -1) {
            this.items.splice(index, 1);

        }
        return this.items;
    }

    getSubtotal() {

        this.subTotal = 0;
        for (let item of this.items) {

            this.subTotal = this.subTotal + (item.price * item.itemsCount);
            for (let adon of item.adOns) {
                this.subTotal = this.subTotal + adon.adonprice;
            }
        }
        return this.subTotal;
    }

    getGrandTotal() {
        this.grandTotal = 0;
        this.grandTotal = ((this.subTotal / 100) * this.tax) + this.subTotal;

        return this.grandTotal;

    }

    getTax() {
       return this.tax;
    }
}
