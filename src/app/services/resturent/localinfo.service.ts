import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class LocalinfoService {

    resturent: any;
    resturetName=''

    constructor(private storage: Storage) {

        this.storage.get('resturent').then((val) => {
            this.resturent = val;
            this.resturetName=val.name;

        }, error => {
            console.log('error while retreiving resturent');
        });
        this.setResturent();
    }

    getResturentName() {

        return this.resturetName;

    }
    seTables(){

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

    setResturent() {
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

    }
}
