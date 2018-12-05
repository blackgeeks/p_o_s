export class Item {

    itemName: String;
    itemServing: String;
    price: number;
    itemsCount: number;
    adOns: Array<Adons> = [];

    constructor(name: String, serving: String, itemPrice: number, count: number) {

        this.itemName = name;
        this.itemsCount = count;
        this.price = itemPrice;
        this.itemServing = serving;
    }

    public insertAdOn(name: any, price: any,allowed:number,type:any) {
        let adOn = new Adons(name, price,allowed,type);
        this.adOns.push(adOn);

    }
}

export class Adons {

    adonName: String;
    adonprice: number;
    allowed: number;
    type: String;

    constructor(name: String, itemPrice: number, allowed: number, type: String) {

        this.adonName = name;
        this.adonprice = itemPrice;
        this.allowed = allowed;
        this.type = type;
    }
}