import {Component, OnInit} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {PopoverPage} from '../popover/popover.page';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-dine',
    templateUrl: './dine.page.html',
    styleUrls: ['./dine.page.scss'],
})
export class DinePage implements OnInit {

    tables = [];

    type = '';

    constructor(private router: Router,public popoverController: PopoverController, public modalCtrl: ModalController,
                private storage: Storage, private route: ActivatedRoute) {
        this.storage.get('tables').then((data) => {

            console.log(data);
            this.tables = data;
        }, error => {
            console.log('error while retreiving resturent');
        });


    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.type = params['type'];
        });

        let result = this.isTableActive('Table 0');

    }

    async presentPopover(ev: Event) {
        const popover = await this.popoverController.create({
            component: PopoverPage,
            event: ev
        });
        return await popover.present();
    }

    async openMenuModal(tablename: any) {
        const modal = await this.modalCtrl.create({
            component: PopoverPage,
            componentProps: {
                table: tablename,
                type: this.type
            }

        });
        await modal.present();
    }

    isTableActive(tablenumber: any) {
        this.storage.get(tablenumber).then((data) => {

            console.log(data);
        }, error => {
            console.log('error while retreiving resturent');
        });
        return false;
    }

    gotoMenu(tablename: string) {
        this.router.navigate(['/menu'], {queryParams: {type: 'dine', edit: true, table: tablename}});

    }
}
