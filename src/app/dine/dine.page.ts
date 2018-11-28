import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopoverPage} from '../popover/popover.page';

@Component({
    selector: 'app-dine',
    templateUrl: './dine.page.html',
    styleUrls: ['./dine.page.scss'],
})
export class DinePage implements OnInit {

    tables = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',];

    constructor(public popoverController: PopoverController) {
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
}
