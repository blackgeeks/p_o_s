import {Injectable} from '@angular/core';
import {Item} from '../sharedclasses/invoiceitems';

@Injectable({
    providedIn: 'root'
})
export class CartserviceService {

    public items: Array<Item> = [];


    subTotal: number;

    constructor() {
        this.subTotal = 0;
    }

    public setItem(name: any, serving: any, itemPrice: number, count: number) {
        let item = new Item(name, serving, itemPrice, count);
        this.items.push(item);
    }

    getItems() {
        return this.items;
    }

    removeItemfromcart(item:any) {
        console.log(item)
        console.log(this.items)

        let index = this.items.findIndex(obj => obj.itemName === item.itemName);
        console.log(index);
        if(index>-1){
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
}
