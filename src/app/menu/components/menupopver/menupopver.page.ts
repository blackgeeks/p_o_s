import {Component, OnInit} from '@angular/core';
import {ModalController, NavParams, ToastController} from '@ionic/angular';
import {CartserviceService} from '../../../services/cartservice.service';
import * as $ from 'jquery';

@Component({
    selector: 'app-menupopver',
    templateUrl: './menupopver.page.html',
    styleUrls: ['./menupopver.page.scss'],
})
export class MenupopverPage implements OnInit {

    item: any;
    height: any;
    width: any;
    isChecked = false;
    adOnslocal = [];
    adOns: any;
    itemsCount = 1;
    itemMeal = '';
    itemPrice = 0;
    relationship: any;

    constructor(public navParams: NavParams, public modalCtrl: ModalController,
                public toastController: ToastController, public cartService: CartserviceService) {
        // platform.ready().then((readySource) => {
        //     // alert('Width: ' + platform.width());
        //     // alert('Height: ' + platform.height());
        //     this.width = platform.width();
        //     this.height = platform.height();
        //     console.log(this.width);
        //
        //     this.width = this.width - this.width / 4;
        //     this.height = this.height - 100;
        //     this.width = this.width + 'px';
        //     console.log(this.width.toString());
        // });
    }

    ngOnInit() {
        // this.width.toString();

        this.item = this.navParams.get('item');
        console.log(this.item);
        this.adOns = this.item.menuItemAdOns;

    }

    async presentToastWithOptions() {
        const toast = await this.toastController.create({
            message: 'Added to cart',
            duration: 2000,
            position: 'top'

        });
        toast.present();
    }

    adOnsSelection(adOns: any) {
        this.adOns = adOns;
    }

    addtoCart(name: any, itemscount: any) {

        if (this.itemMeal !== '') {
            this.cartService.setItem(name, this.itemMeal, this.itemPrice, itemscount);
            console.log(this.cartService.items.length);
            let lastItem=this.cartService.items.length-1;
            for(let adon of this.adOnslocal){
                this.cartService.items[lastItem].insertAdOn(adon.name,adon.price,1,adon.type)
            }

            console.log(this.cartService.items)

            this.presentToastWithOptions();
            this.modalCtrl.dismiss();

        }
        else {
            this.presentToastWithCustomOptions('Please select any meal first');
        }

    }

    async presentToastWithCustomOptions(message: any) {
        const toast = await this.toastController.create({
            message: message,
            showCloseButton: true,
            position: 'middle',
            closeButtonText: 'Done',
            duration: 2000
        });
        toast.present();
    }

    selectMeal(item: any) {
        console.log(item);
        this.itemPrice = item.price;
        this.itemMeal = item.serving;
        console.log(this.itemMeal);

    }

    reduceCount() {
        this.itemsCount = this.itemsCount - 1;
    }

    incrimentCount() {
        this.itemsCount = parseInt(String(this.itemsCount)) + 1;

    }

    updateMeal(event, allowed: any, type: any, adon: any) {
        console.log(allowed);
        if (event.detail.checked == true) {

            console.log(this.adOnslocal.length);
            let count = 0;
            for (let item of this.adOnslocal) {
                if (item.type === type) {
                    count += 1;
                }

            }
            if (count < allowed) {
                // alert('you are allowed');

                if (event.detail.checked == true) {

                    console.log(adon);
                    this.adOnslocal.push({
                        'name': adon.name,
                        'price': adon.price,
                        'type': type,
                    });
                    console.log(this.adOnslocal);
                }
                else {
                    console.log(event.detail.checked);
                    console.log(this.adOnslocal);

                }
            }
            else {
                alert('you are not allowed to select more than allowed items');
                $('#' + adon.id).prop('checked', false);

            }


        } else {
            let index = this.adOnslocal.findIndex(obj => obj.name === adon.name);
            console.log(index);
            this.adOnslocal.splice(index, 1);
        }
    }
}