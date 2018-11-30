import {Component, OnInit} from '@angular/core';
import {NavParams, Platform, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-menupopver',
    templateUrl: './menupopver.page.html',
    styleUrls: ['./menupopver.page.scss'],
})
export class MenupopverPage implements OnInit {

    item: any;
    height: any;
    width: any;
    isChecked=false;
    adOns: any;

    constructor(public navParams: NavParams, platform: Platform, public toastController: ToastController) {
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

    addtoCart() {
        this.presentToastWithOptions();

    }
}