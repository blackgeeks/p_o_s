import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {PopoverPage} from '../popover/popover.page';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {LocalinfoService} from '../services/resturent/localinfo.service';

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
                public modalCtrl: ModalController,
                private storage: Storage, private route: ActivatedRoute) {


        this.storage.get('tables').then((data) => {

            this.tables = data;
            console.log(data);

        }, error => {
            console.log('error while getting tables');

            setTimeout(() => {
                this.storage.get('tables').then((data) => {

                    this.tables = data;
                    console.log(data);

                }, error => {
                    console.log('error while getting tables');

                });


            }, 3000);
        });


    }

    ngOnInit() {

        this.isLoaded=false;

        this.route.queryParams.subscribe(params => {
            this.type = params['type'];
            this.storage.get('tables').then((data) => {

                this.tables = data;
                this.isLoaded=true;

                console.log(data);

            }, error => {
                console.log('error while getting tables');

            });


        })



    }
    ngAfterViewInit(){
        this.storage.get('tables').then((data) => {

            this.tables = data;
            console.log(data);

        }, error => {
            console.log('error while getting tables');
        });

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

    refreshtablestats() {

        console.log('refresh')
            this.storage.get('tables').then((data) => {

                this.tables = data;

            }, error  => {
                console.log('error while getting tables');
            });



    }

}
