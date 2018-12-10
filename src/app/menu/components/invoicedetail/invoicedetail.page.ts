import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../../../services/cartservice.service';
import {Storage} from '@ionic/storage';
import {ModalController, NavParams} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invoicedetail',
  templateUrl: './invoicedetail.page.html',
  styleUrls: ['./invoicedetail.page.scss'],
})
export class InvoicedetailPage implements OnInit {

  table:any;
  coupon:any
  constructor( public cartService: CartserviceService,
              private storage: Storage,
              private router: Router,
              public navParams: NavParams,
              public modalCtrl: ModalController
              ) { }

  ngOnInit() {
      this.table = this.navParams.get('table');
  }

    printInv() {
        this.storage.get('tables').then((data) => {

            for (let table of data) {
                if (table.name == this.table) {
                    table.status = 'bill processing';
                }
            }
            this.storage.remove('tables');
            this.storage.set('tables', data);
            setTimeout(() => {
              this.modalCtrl.dismiss()
                this.router.navigate(['/dine'], {queryParams: {type: 'dine'}});
            }, 200);
        }, error => {
        });
    }

}
