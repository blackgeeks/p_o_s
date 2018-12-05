import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.page.html',
    styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

    type = '';
    table = '';

    constructor(public navParams: NavParams, private router: Router, public modalCtrl: ModalController) {
    }

    ngOnInit() {
        this.type = this.navParams.get('type');
        this.table = this.navParams.get('table');
    }

    menu(event, waiter: any) {
        console.log(event);
        this.modalCtrl.dismiss();
        this.router.navigate(['/menu'], {queryParams: {type: this.type, table: this.table, waiter: waiter, edit:false}});

    }
}
