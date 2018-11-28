import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    resturent: any;

    constructor(private router: Router, private navCtrl: NavController,
                private nativeStorage: NativeStorage, private storage: Storage) {

        this.storage.set('resturent', {
            'id': 3,
            'name': 'Howdy',
            'uan': '042883555885',
            'website': 'http://howdy.com',
            'created': '2016-11-15T19:00:00.000+0000',
            'modified': '2018-11-24T09:39:04.000+0000',
            'profitConfigurations': '{\n  "fixedProfit": false,\n  "fixedProfitAmount": 10,\n  "percent": false,\n  "priceWiseProfit": [\n    {\n      "from": 500,\n      "to": 1000,\n      "profit": 5\n    },\n    {\n      "from": 1000,\n      "to": 5000,\n      "profit": 15\n    },\n    {\n      "from": 5000,\n      "to": 10000,\n      "profit": 20\n    }\n  ]\n}',
            'type': 'Fast Food / Burgers',
            'bigPicture': 'howdycover1.jpg',
            'smallPicture': 'howdy.jpg',
            'deleted': true,
            'onDeliveryMonster': true
        })
            .then(
                () => {
                },
                error => console.error('Error storing item', error)
            );


        // Or to get a key/value pair
        this.storage.get('resturent').then((val) => {
            this.resturent = val;
        }, error => {
            console.log('error while retreiving resturent');
        });

    }

    Dine() {
        this.router.navigate(['/dine']);
        // this.navCtrl.navigateForward('/dine');
    }

    delievery() {

        alert('Coming Soon');
    }

    takeaway() {
        alert('Coming Soon');
    }
}
