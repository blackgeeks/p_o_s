import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {AlertController, ModalController} from '@ionic/angular';
import {MenupopverPage} from './components/menupopver/menupopver.page';
import {CartserviceService} from '../services/cartservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastmanagerService} from '../services/toast/toastmanager.service';
import {SettlementpopoverPage} from './components/settlementpopover/settlementpopover.page';
import {LocalinfoService} from '../services/resturent/localinfo.service';
import {TablesinfoService} from '../services/tables/tablesinfo.service';
import {InvoicedetailPage} from './components/invoicedetail/invoicedetail.page';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {


    type = '';
    table = '';
    waiter = '';
    edit = 'false';
    menu: any;
    selectedCatItems: any;
    keyword_Search = '';
    selectedIndex=0;

    constructor(private storage: Storage, private router: Router, public alertController: AlertController, public  tableInfo: TablesinfoService,
                public modalCtrl: ModalController, private toastManager: ToastmanagerService, public resturentInfo: LocalinfoService,
                public cartService: CartserviceService, private route: ActivatedRoute) {



        if (this.storage.get('menu') !== null) {
            this.storage.get('menu').then((data) => {

                this.menu = data;
                this.selectedCatItems = this.menu[0].menuItemsById;
                ////console.log(this.menu);
            }, error => {
                ////console.log('error while retreiving resturent');
            });


        }
        else {

        }

    }

    ngOnInit() {
        this.cartService.items = [];

        this.route.queryParams.subscribe(params => {
            this.type = params['type'];
            this.waiter = params['waiter'];
            this.table = params['table'];
            this.edit = params['edit'];
            ////console.log(this.edit);
            if (this.edit == 'true') {
                this.storage.get(this.table).then((data) => {
                    //console.log(data);

                    this.cartService.items = data.order;
                    this.waiter = data.waiter;
                }, error => {

                });
            }
        });

    }

    selectItems(id) {

        this.selectedIndex=id;

        this.selectedCatItems = this.menu[this.selectedIndex].menuItemsById;

    }


    async openMenuModal(item: any) {
        const modal = await this.modalCtrl.create({
            component: MenupopverPage,
            cssClass: 'my-modal',
            componentProps: {
                item: item
            }
        });
        await modal.present();
    }


    async openSettlementModal() {
        const modal = await this.modalCtrl.create({
            component: SettlementpopoverPage,
            componentProps: {
                table: this.table
            }
        });
        await modal.present();
    }




    async openInvoiceModal() {
        const modal = await this.modalCtrl.create({
            component: InvoicedetailPage,
            componentProps: {
                table: this.table
            }
        });
        await modal.present();
    }

    placeorder() {

        this.toastManager.presentToastWithCustomOptions('Order Placed');
        this.storage.set(this.table, {
            'order': this.cartService.getItems(),
            'total': this.cartService.getSubtotal(),
            'status': 'active',
            'waiter': this.waiter
        });
        this.storage.get('tables').then((data) => {

            ////console.log(data);
            for (let table of data) {
                if (table.name == this.table) {
                    table.status = 'on going';


                }
            }

            ////console.log(data);
            this.storage.remove('tables');

            this.storage.set('tables', data);


            setTimeout(() => {
                this.router.navigate(['/dine'], {queryParams: {type: 'dine'}});
            }, 200);

        }, error => {
        });
    }


    removeitemfromCart(item: any) {

        this.cartService.removeItemfromcart(item);

    }

    printInv() {
        this.openInvoiceModal()
        //
        // this.storage.get('tables').then((data) => {
        //
        //     for (let table of data) {
        //         if (table.name == this.table) {
        //             table.status = 'bill processing';
        //         }
        //     }
        //     this.storage.remove('tables');
        //     this.storage.set('tables', data);
        //     setTimeout(() => {
        //         this.router.navigate(['/dine'], {queryParams: {type: 'dine'}});
        //     }, 200);
        // }, error => {
        // });
    }

    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Are you Sure!',
            message: 'Cancel Order???',
            buttons: [
                {
                    text: 'No, Get me back',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        ////console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.toastManager.presentToastWithCustomOptions('Order Cancelled');

                        this.router.navigate(['']);
                    }
                }
            ]
        });

        await alert.present();
    }

    async confirmationbeforePlaceorder() {
        const alert = await this.alertController.create({
            header: 'Order Confirmation!',
            message: 'Is Order Completed?',
            buttons: [
                {
                    text: 'No, Get me back',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        ////console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.placeorder();
                    }
                }
            ]
        });

        await alert.present();
    }


    cancelorder() {
        this.presentAlertConfirm();
    }

    settlment() {
        this.openSettlementModal();
    }

    onInput(event: any) {
        let items=this.menu[this.selectedIndex].menuItemsById;
        this.selectedCatItems = items.filter(d => d.name.toLocaleLowerCase().includes(this.keyword_Search.toLocaleLowerCase()))
    }

}
