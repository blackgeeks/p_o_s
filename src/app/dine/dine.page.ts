import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {PopoverPage} from '../popover/popover.page';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {LocalinfoService} from '../services/resturent/localinfo.service';
import {TablesinfoService} from '../services/tables/tablesinfo.service';
import {SettlementpopoverPage} from '../menu/components/settlementpopover/settlementpopover.page';
import {TransfertablePage} from './popups/transfertable/transfertable.page';

@Component({
    selector: 'app-dine',
    templateUrl: './dine.page.html',
    styleUrls: ['./dine.page.scss'],
})
export class DinePage implements OnInit , AfterViewInit{

    tables = [];
    isLoaded=false;

    type = '';

    constructor(private router: Router, public popoverController: PopoverController, public resturentInfo: LocalinfoService,
                public modalCtrl: ModalController, public tableInfo: TablesinfoService,
                private storage: Storage, private route: ActivatedRoute) {



    }

    ngOnInit() {

        this.isLoaded=false;

        this.route.queryParams.subscribe(params => {
            this.type = params['type'];

            this.tableInfo.refreshtablestats();

        });



    }
    ngAfterViewInit(){

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

    refreshtablestats() {

        console.log('refresh')
            this.storage.get('tables').then((data) => {

                this.tables = data;

            }, error  => {
                console.log('error while getting tables');
            });



    }


    async openTransferTable() {
        const modal = await this.modalCtrl.create({
            component: TransfertablePage,
        });
        await modal.present();
    }

}
