import {Component, OnInit} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {PopoverPage} from '../popover/popover.page';
import {MenupopverPage} from '../menu/components/menupopver/menupopver.page';

@Component({
    selector: 'app-dine',
    templateUrl: './dine.page.html',
    styleUrls: ['./dine.page.scss'],
})
export class DinePage implements OnInit {

    tables = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];

    constructor(public popoverController: PopoverController,public modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    async presentPopover(ev: Event) {
        const popover = await this.popoverController.create({
            component: PopoverPage,
            event: ev
        });
        return await popover.present();
    }

    async openMenuModal() {
        const modal = await this.modalCtrl.create({
            component: PopoverPage,

        });
        await modal.present();
    }
}
