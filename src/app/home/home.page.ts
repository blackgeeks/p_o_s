import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {Storage} from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {DatabaseService} from '../services/database/database.service';
import {LocalinfoService} from '../services/resturent/localinfo.service';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    resturent: any;

    constructor(private router: Router, private navCtrl: NavController, public resturentInfo: LocalinfoService,
                private nativeStorage: NativeStorage, private storage: Storage) {

        this.storage.set('branch',{
            "id": 3,
            "phone1": "04235757781",
            "phone2": "",
            "phone3": "",
            "created": "2016-11-15T19:00:00.000+0000",
            "modified": "2018-06-30T17:30:11.000+0000",
            "deliveryRadius": 10,
            "minimumOrder": 600,
            "deliveryConfigurations": "[{\"from_km\":0,\"to_km\":7,\"cost\":0},{\"from_km\":8,\"to_km\":10,\"cost\":100}]",
            "freeDelivery": true,
            "tax": 16,
            "masterBranch": false,
            "timings": "[{\"day\":\"Monday\",\"starting\":3,\"closing\":2,\"closesOnNextDay\":true},{\"day\":\"Wednesday\",\"starting\":0,\"closing\":4,\"closesOnNextDay\":false},{\"day\":\"Tuesday\",\"starting\":0,\"closing\":4,\"closesOnNextDay\":true}]",
            "restaurantsByRestaurantId": {
                "id": 3,
                "name": "Howdy"
            },
            "areasByAreaId": {
                "id": 827,
                "name": "Johar Town Block R3",
                "citiesByCityId": {
                    "id": 1,
                    "city": "Lahore"
                }
            },
            "open24Hours": false
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




        this.storage.get('tables').then((data) => {

            console.log(data);

            if(data){
                // alert('hi')
            }
            else {

                this.storage.set('tables', [{
                        name: 'Table 0',
                        status: 'empty'
                    },
                        {
                            name: 'Table 1',
                            status: 'empty'
                        },
                        {
                            name: 'Table 2',
                            status: 'empty'
                        },
                        {
                            name: 'Table 3',
                            status: 'empty'
                        }]
                );
            }


        }, error => {
            console.log('error while retreiving resturent');
        });


        // this.dbService.getData()
    }



    Dine() {
        this.router.navigate(['/dine'], { queryParams: { type: 'dine' } });
        // this.navCtrl.navigateForward('/dine');
    }

    delievery() {
        console.log(this.resturentInfo.getResturentName())

        alert('Coming Soon');
    }

    takeaway() {
        alert('Coming Soon');
    }
}
