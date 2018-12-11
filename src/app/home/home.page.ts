import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {Storage} from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import {DatabaseService} from '../services/database/database.service';
import {LocalinfoService} from '../services/resturent/localinfo.service';
import {TablesinfoService} from '../services/tables/tablesinfo.service';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    resturent: any;

    constructor(private router: Router, private navCtrl: NavController, public resturentInfo: LocalinfoService,
                private nativeStorage: NativeStorage, private storage: Storage, private tableInfo: TablesinfoService) {


        this.tableInfo.refreshtablestats();

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




        this.storage.get('menu').then((data) => {

            console.log(data);

            if(data){
                // alert('hi')
            }
            else {



                this.storage.set('menu', [
                    {
                        'id': 6,
                        'name': 'MOST POPULAR',
                        'created': '2016-11-15T19:00:00.000+0000',
                        'modified': '2016-11-15T19:00:00.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 11,
                                'name': 'Son Of A Bun                                                                                        ',
                                'description': 'Double Stack Beef Burger With Double Cheese & Turkey Strips. Burger meals come with a soda drink can and plain fries',
                                'created': '2016-11-15T19:00:00.000+0000',
                                'modified': '2018-02-15T12:20:42.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 24,
                                        'price': 850,
                                        'serving': 'Meal Serves 1',
                                        'created': '2016-11-15T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    },
                                    {
                                        'id': 4611,
                                        'price': 1050,
                                        'serving': 'Meal Serves 2',
                                        'created': '2018-11-27T09:01:15.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': [
                                    {
                                        'id': 1,
                                        'addOnCategory': {
                                            'id': 1,
                                            'created': '2018-10-17T19:00:00.000+0000',
                                            'modified': '2018-10-17T19:00:00.000+0000',
                                            'name': 'Fries & Drinks',
                                            'allowedItems': 1,
                                            'addOnItemsById': [
                                                {
                                                    'id': 1,
                                                    'created': '2018-10-17T19:00:00.000+0000',
                                                    'modified': '2018-11-27T12:47:38.000+0000',
                                                    'name': 'Pepsi',
                                                    'price': 55
                                                },
                                                {
                                                    'id': 7,
                                                    'created': '2018-11-27T12:47:38.000+0000',
                                                    'modified': '2018-11-27T12:47:38.000+0000',
                                                    'name': '7 Up',
                                                    'price': 55
                                                }
                                            ]
                                        },
                                        'created': '2018-11-25T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': true
                                    },
                                    {
                                        'id': 2,
                                        'addOnCategory': {
                                            'id': 2,
                                            'created': '2018-11-25T19:00:00.000+0000',
                                            'modified': '2018-11-25T19:00:00.000+0000',
                                            'name': 'Sauces',
                                            'allowedItems': 3,
                                            'addOnItemsById': [
                                                {
                                                    'id': 2,
                                                    'created': '2018-11-25T19:00:00.000+0000',
                                                    'modified': '2018-11-27T12:47:38.000+0000',
                                                    'name': 'Chipotle',
                                                    'price': 55
                                                },
                                                {
                                                    'id': 3,
                                                    'created': '2018-11-25T19:00:00.000+0000',
                                                    'modified': '2018-11-27T12:47:38.000+0000',
                                                    'name': 'Butter',
                                                    'price': 60
                                                },
                                                {
                                                    'id': 8,
                                                    'created': '2018-11-27T12:47:38.000+0000',
                                                    'modified': '2018-11-27T12:47:38.000+0000',
                                                    'name': 'Makhni',
                                                    'price': 78
                                                }
                                            ]
                                        },
                                        'created': '2018-11-25T19:00:00.000+0000',
                                        'modified': '2018-11-25T19:00:00.000+0000',
                                        'deleted': false
                                    }
                                ]
                            },
                            {
                                'id': 14,
                                'name': 'Rango Tango',
                                'description': 'Jalapeno Grilled Chicken Fillet Burger. Burger meals come with a soda drink can and plain fries',
                                'created': '2016-11-15T19:00:00.000+0000',
                                'modified': '2016-11-15T19:00:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 27,
                                        'price': 597,
                                        'serving': 'Meal Serves 1',
                                        'created': '2016-11-15T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 15,
                                'name': 'Go Wild',
                                'description': 'Double Breast Of A Chicken Burger With Spicy Red Sauce. Burger meals come with a soda drink can and plain fries',
                                'created': '2016-11-15T19:00:00.000+0000',
                                'modified': '2016-11-15T19:00:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 28,
                                        'price': 699,
                                        'serving': 'Meal Serves 1',
                                        'created': '2016-11-15T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 20,
                                'name': 'Wrangler',
                                'description': 'Grilled Breast Of A Chicken Burger. Burger meals come with a soda drink can and plain fries',
                                'created': '2016-11-15T19:00:00.000+0000',
                                'modified': '2016-11-15T19:00:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 33,
                                        'price': 597,
                                        'serving': 'Meal Serves 1',
                                        'created': '2016-11-15T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 21,
                                'name': 'Stay Mild',
                                'description': 'Double Breast Of A Chicken Burger With Creamy White Sauce. Burger meals come with a soda drink can and plain fries',
                                'created': '2016-11-15T19:00:00.000+0000',
                                'modified': '2016-11-15T19:00:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 34,
                                        'price': 699,
                                        'serving': 'Meal Serves 1',
                                        'created': '2016-11-15T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 22,
                                'name': 'John Wayne\'s',
                                'description': 'Classic Beef Burger. Burger meals come with a soda drink can and plain fries',
                                'created': '2016-11-15T19:00:00.000+0000',
                                'modified': '2016-11-15T19:00:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 35,
                                        'price': 579,
                                        'serving': 'Meal Serves 1',
                                        'created': '2016-11-15T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 23,
                                'name': 'Texan',
                                'description': 'White Sauce Steak (Served With Our House Made Outrider Mash Potato & Saute Veggies)',
                                'created': '2016-11-15T19:00:00.000+0000',
                                'modified': '2016-11-15T19:00:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 36,
                                        'price': 849,
                                        'serving': 'Meal Serves 1',
                                        'created': '2016-11-15T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 24,
                                'name': 'Desperado',
                                'description': 'Jalapeno Steak (Served With Our House Made Outrider Mash Potato & Saute Veggies)',
                                'created': '2016-11-15T19:00:00.000+0000',
                                'modified': '2016-11-15T19:00:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 37,
                                        'price': 849,
                                        'serving': 'Meal Serves 1',
                                        'created': '2016-11-15T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 26,
                                'name': 'Frenzy',
                                'description': 'Twisted Fries',
                                'created': '2016-11-15T19:00:00.000+0000',
                                'modified': '2016-11-15T19:00:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 39,
                                        'price': 249,
                                        'serving': '1 Bucket ',
                                        'created': '2016-11-15T19:00:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 267,
                                'name': 'Django',
                                'description': 'BBQ Chicken Subwich\n',
                                'created': '2017-07-26T09:54:42.000+0000',
                                'modified': '2017-07-26T09:54:42.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 337,
                                        'price': 599,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-26T09:55:14.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 9,
                        'name': 'BURGERS',
                        'created': '2016-11-15T19:00:00.000+0000',
                        'modified': '2016-11-15T19:00:00.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 129,
                                'name': 'Tickle Pickle',
                                'description': 'Jalapeno Beef Burger. Burger meals come with a soda drink can and plain fries\n',
                                'created': '2017-07-12T13:00:33.000+0000',
                                'modified': '2017-07-12T13:00:33.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 200,
                                        'price': 589,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-12T13:01:30.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 130,
                                'name': 'Wrangler',
                                'description': 'Grilled Breast Of A Chicken Burger. Burger meals come with a soda drink can and plain fries\n',
                                'created': '2017-07-12T13:03:18.000+0000',
                                'modified': '2017-07-12T13:03:18.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 202,
                                        'price': 597,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-12T13:04:08.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 132,
                                'name': 'Rodeo Glory',
                                'description': 'Mushroom Beef Burger. Burger meals come with a soda drink can and plain fries\n',
                                'created': '2017-07-12T13:13:09.000+0000',
                                'modified': '2017-07-12T13:13:09.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 420,
                                        'price': 599,
                                        'serving': 'Meal Serves 1',
                                        'created': '2018-01-10T12:24:40.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 134,
                                'name': 'Rango Tango',
                                'description': 'Jalapeno Grilled Chicken Fillet Burger. Burger meals come with a soda drink can and plain fries\n',
                                'created': '2017-07-12T13:14:29.000+0000',
                                'modified': '2017-07-12T13:14:29.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 205,
                                        'price': 597,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-12T13:15:30.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 135,
                                'name': 'John Wayne\'s',
                                'description': 'Classic Beef Burger. Burger meals come with a soda drink can and plain fries\n',
                                'created': '2017-07-12T13:15:59.000+0000',
                                'modified': '2017-07-12T13:15:59.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 207,
                                        'price': 579,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-12T13:16:26.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 136,
                                'name': 'Son Of A Bun',
                                'description': 'Double Stack Beef Burger With Double Cheese & Turkey Strips. Burger meals come with a soda drink can and plain fries\n',
                                'created': '2017-07-12T13:17:52.000+0000',
                                'modified': '2017-07-12T13:17:52.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 209,
                                        'price': 679,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-12T13:18:15.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 137,
                                'name': 'Stay Mild',
                                'description': 'Double Breast Of A Chicken Burger With Creamy White Sauce. Burger meals come with a soda drink can and plain fries\n',
                                'created': '2017-07-12T13:24:26.000+0000',
                                'modified': '2017-07-12T13:24:26.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 210,
                                        'price': 699,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-12T13:24:49.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 138,
                                'name': 'Go Wild',
                                'description': 'Double Breast Of A Chicken Burger With Spicy Red Sauce. Burger meals come with a soda drink can and plain fries\n',
                                'created': '2017-07-12T13:25:18.000+0000',
                                'modified': '2017-07-12T13:25:18.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 212,
                                        'price': 699,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-12T13:25:50.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 340,
                                'name': 'Volconda',
                                'description': 'Mutton Doubleton  & Stuffed Cheese Patty',
                                'created': '2018-01-08T13:32:57.000+0000',
                                'modified': '2018-02-08T14:34:56.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 408,
                                        'price': 799,
                                        'serving': 'Meal Serves 1',
                                        'created': '2018-01-08T13:33:22.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 341,
                                'name': 'Smookin',
                                'description': 'Spicy Red Wood-Fire Sauce',
                                'created': '2018-01-08T13:37:19.000+0000',
                                'modified': '2018-02-08T14:34:45.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 409,
                                        'price': 699,
                                        'serving': 'Meal Serves 1',
                                        'created': '2018-01-08T13:37:43.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 342,
                                'name': 'Shroomin',
                                'description': 'Creamy White Mushroom Sauce',
                                'created': '2018-01-08T13:39:17.000+0000',
                                'modified': '2018-01-08T13:39:17.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 410,
                                        'price': 699,
                                        'serving': 'Meal Serves 1',
                                        'created': '2018-01-08T13:39:44.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 343,
                                'name': 'Prawn Star Super                                                                                    ',
                                'description': 'Super Cheesy Patty Feat. Prawns + Pair Of Fish Patties Feat. Prawns',
                                'created': '2018-01-08T13:45:24.000+0000',
                                'modified': '2018-01-08T13:57:29.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 411,
                                        'price': 699,
                                        'serving': 'Meal Serves 1',
                                        'created': '2018-01-08T13:53:29.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 344,
                                'name': 'Prawn Star Classic',
                                'description': 'Pair of Fish Patties Feat. Prawns',
                                'created': '2018-01-08T13:59:14.000+0000',
                                'modified': '2018-01-08T13:59:14.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 412,
                                        'price': 649,
                                        'serving': 'Meal Serves 1',
                                        'created': '2018-01-08T13:59:43.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 32,
                        'name': 'SANDWICHES   ',
                        'created': '2017-06-12T17:29:44.000+0000',
                        'modified': '2018-02-08T14:54:15.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 139,
                                'name': 'Django',
                                'description': 'BBQ Chicken Subwich\n',
                                'created': '2017-07-13T07:26:04.000+0000',
                                'modified': '2017-07-13T07:26:04.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 213,
                                        'price': 599,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-13T07:27:00.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 33,
                        'name': ' CHICKEN STEAKS',
                        'created': '2017-07-13T07:29:28.000+0000',
                        'modified': '2017-07-13T07:29:28.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 140,
                                'name': 'Gunslinger',
                                'description': 'Pepper Steak (Served With Our House Made Outrider Mash Potato & Saute Veggies)\n',
                                'created': '2017-07-13T07:29:59.000+0000',
                                'modified': '2017-07-13T07:29:59.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 214,
                                        'price': 849,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-13T07:30:29.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 141,
                                'name': 'Texan',
                                'description': 'White Sauce Steak (Served With Our House Made Outrider Mash Potato & Saute Veggies)\n',
                                'created': '2017-07-13T07:31:05.000+0000',
                                'modified': '2017-07-13T07:31:05.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 215,
                                        'price': 849,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-13T07:32:26.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 142,
                                'name': 'Desperado',
                                'description': 'Jalapeno Steak (Served With Our House Made Outrider Mash Potato & Saute Veggies)\n',
                                'created': '2017-07-13T07:33:23.000+0000',
                                'modified': '2017-07-13T07:33:23.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 216,
                                        'price': 849,
                                        'serving': 'Meal Serves 1',
                                        'created': '2017-07-13T07:33:50.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 34,
                        'name': ' JUNIOR GIDDY CHICKABIDDY',
                        'created': '2017-07-13T07:34:50.000+0000',
                        'modified': '2017-07-13T07:34:50.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 143,
                                'name': 'Lil Buckaroo\'s',
                                'description': 'Chicken Pattie Burger with plain fries without cheese ',
                                'created': '2017-07-13T07:35:34.000+0000',
                                'modified': '2018-02-08T14:23:06.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 217,
                                        'price': 249,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T07:35:55.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 144,
                                'name': 'Giggles',
                                'description': 'Nuggets with fries',
                                'created': '2017-07-13T07:36:44.000+0000',
                                'modified': '2018-01-08T14:08:51.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 218,
                                        'price': 249,
                                        'serving': '6 pieces',
                                        'created': '2017-07-13T07:43:37.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 35,
                        'name': 'FRIES',
                        'created': '2017-07-13T07:44:29.000+0000',
                        'modified': '2017-07-13T07:44:29.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 145,
                                'name': 'Hot Cowgirl',
                                'description': 'Masala Fries\n',
                                'created': '2017-07-13T07:44:55.000+0000',
                                'modified': '2017-07-13T07:44:55.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 219,
                                        'price': 199,
                                        'serving': '1 Bucket',
                                        'created': '2017-07-13T07:45:17.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 146,
                                'name': 'Sheriff\'s Fav',
                                'description': 'Garlic Mayo Fries\n',
                                'created': '2017-07-13T07:45:44.000+0000',
                                'modified': '2017-07-13T07:45:44.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 220,
                                        'price': 249,
                                        'serving': '1 Bucket',
                                        'created': '2017-07-13T07:46:04.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 147,
                                'name': 'Howdy Deputy',
                                'description': 'Hot Mayo Fries\n',
                                'created': '2017-07-13T07:46:46.000+0000',
                                'modified': '2017-07-13T07:46:46.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 222,
                                        'price': 249,
                                        'serving': '1 Bucket',
                                        'created': '2017-07-13T08:10:17.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 149,
                                'name': 'Frenzy',
                                'description': 'Twisted Fries\n',
                                'created': '2017-07-13T07:48:12.000+0000',
                                'modified': '2017-07-13T07:48:12.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 221,
                                        'price': 249,
                                        'serving': '1 Bucket',
                                        'created': '2017-07-13T07:48:30.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 150,
                                'name': 'Country Cowboy',
                                'description': 'Plain Fries\n',
                                'created': '2017-07-13T08:12:01.000+0000',
                                'modified': '2017-07-13T08:12:01.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 223,
                                        'price': 189,
                                        'serving': '1 Bucket',
                                        'created': '2017-07-13T08:12:23.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 36,
                        'name': 'COLD BEVERAGES',
                        'created': '2017-07-13T08:12:56.000+0000',
                        'modified': '2017-07-13T08:12:56.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 151,
                                'name': 'Bubbles Of Happiness',
                                'description': 'Soda Drink Can\n',
                                'created': '2017-07-13T08:13:20.000+0000',
                                'modified': '2017-07-13T08:13:20.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 224,
                                        'price': 79,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T08:36:43.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 152,
                                'name': 'Randy Cowboy',
                                'description': 'Cold Coffee\n',
                                'created': '2017-07-13T08:51:34.000+0000',
                                'modified': '2017-07-13T08:51:34.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 225,
                                        'price': 249,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T08:51:56.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 153,
                                'name': 'Zippy',
                                'description': 'Lemonade',
                                'created': '2017-07-13T08:52:18.000+0000',
                                'modified': '2017-07-13T08:52:18.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 226,
                                        'price': 179,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T08:52:39.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 154,
                                'name': 'Yeee Haaa',
                                'description': 'Margaritas. These are seasonal drinks, our customer service will inform you of options and availability\n',
                                'created': '2017-07-13T08:53:07.000+0000',
                                'modified': '2017-07-13T08:53:07.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 227,
                                        'price': 189,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T08:53:25.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 155,
                                'name': 'Goody Moody',
                                'description': 'Smoothies',
                                'created': '2017-07-13T08:53:49.000+0000',
                                'modified': '2017-09-07T05:06:45.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 228,
                                        'price': 249,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T08:54:12.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 156,
                                'name': 'Bangtail',
                                'description': 'Mocktail - Pina Colada (Pineapple and Coconut)',
                                'created': '2017-07-13T08:54:34.000+0000',
                                'modified': '2018-02-08T14:25:21.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 229,
                                        'price': 259,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T08:54:57.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 353,
                                'name': 'Fresh Lime',
                                'description': 'Fresh lime Juice in Sprite',
                                'created': '2018-01-10T13:35:33.000+0000',
                                'modified': '2018-01-10T13:35:33.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 423,
                                        'price': 95,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-10T13:35:56.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 533,
                                'name': 'Mineral Water ( Small )                                                           ',
                                'description': 'Mineral Water',
                                'created': '2018-02-22T08:41:08.000+0000',
                                'modified': '2018-02-22T08:42:16.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 631,
                                        'price': 45,
                                        'serving': 'Serves 1',
                                        'created': '2018-02-22T08:43:29.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 534,
                                'name': 'Mineral Water ( Large )',
                                'description': 'Mineral Water',
                                'created': '2018-02-22T08:43:09.000+0000',
                                'modified': '2018-02-22T08:43:09.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 632,
                                        'price': 85,
                                        'serving': 'Serves 1',
                                        'created': '2018-02-22T08:44:05.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 37,
                        'name': 'HOT BEVERAGES',
                        'created': '2017-07-13T08:55:47.000+0000',
                        'modified': '2017-07-13T08:55:47.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 158,
                                'name': 'Six Shooter',
                                'description': 'Cappuccino',
                                'created': '2017-07-13T08:58:09.000+0000',
                                'modified': '2017-07-13T08:58:09.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 231,
                                        'price': 279,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T08:59:35.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 159,
                                'name': 'Ranchero',
                                'description': 'Latte',
                                'created': '2017-07-13T09:00:00.000+0000',
                                'modified': '2017-07-13T09:00:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 232,
                                        'price': 279,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T09:00:19.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 160,
                                'name': 'Loco',
                                'description': 'Mocha',
                                'created': '2017-07-13T09:00:50.000+0000',
                                'modified': '2017-07-13T09:00:50.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 233,
                                        'price': 289,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T09:01:12.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 162,
                                'name': 'Belly Wash',
                                'description': 'Green Tea\n',
                                'created': '2017-07-13T09:02:47.000+0000',
                                'modified': '2017-07-13T09:02:47.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 235,
                                        'price': 89,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T09:03:05.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 163,
                                'name': 'Local County',
                                'description': 'Mix Tea\n',
                                'created': '2017-07-13T09:03:32.000+0000',
                                'modified': '2018-01-09T14:54:42.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 236,
                                        'price': 199,
                                        'serving': 'Serves 1',
                                        'created': '2017-07-13T09:03:50.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 336,
                                'name': 'Black Water',
                                'description': 'Espresso Shot',
                                'created': '2018-01-07T21:49:15.000+0000',
                                'modified': '2018-01-07T21:49:15.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 405,
                                        'price': 179,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-07T21:50:32.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 59,
                        'name': 'Howdy Crazy Value Meal',
                        'created': '2017-08-01T12:14:58.000+0000',
                        'modified': '2017-08-01T12:14:58.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 270,
                                'name': 'Teeny Weeny Smokin\'                                                             ',
                                'description': 'Double Patty Chicken Burger\n',
                                'created': '2017-08-01T12:20:10.000+0000',
                                'modified': '2018-01-23T11:35:48.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 343,
                                        'price': 329,
                                        'serving': 'Serves 1',
                                        'created': '2017-08-01T12:24:25.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 272,
                                'name': 'Itsy Bitsy Shroomin\'',
                                'description': 'Double Patty Chicken Burger\n',
                                'created': '2017-08-01T12:20:52.000+0000',
                                'modified': '2017-08-01T12:20:52.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 344,
                                        'price': 329,
                                        'serving': 'Serves 1',
                                        'created': '2017-08-01T12:24:36.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 339,
                                'name': 'Lil Dozer',
                                'description': 'Lil Big Beef Burger',
                                'created': '2018-01-08T12:17:31.000+0000',
                                'modified': '2018-01-08T12:17:31.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 407,
                                        'price': 329,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-08T12:18:16.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 76,
                        'name': 'DIPS',
                        'created': '2018-01-10T13:19:55.000+0000',
                        'modified': '2018-01-10T13:19:55.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 351,
                                'name': 'Garlic Mayo Dip',
                                'description': 'Garlic Mayo Dip',
                                'created': '2018-01-10T13:24:50.000+0000',
                                'modified': '2018-01-10T13:24:50.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 421,
                                        'price': 35,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-10T13:25:19.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 352,
                                'name': 'Hot Mayo Dip',
                                'description': 'Hot Mayo Dip',
                                'created': '2018-01-10T13:27:04.000+0000',
                                'modified': '2018-01-10T13:27:04.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 422,
                                        'price': 35,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-10T13:27:29.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3447,
                                'name': 'Green Chili Sauce',
                                'description': 'Limited menu item. Only served with Rotisserie Chicken.',
                                'created': '2018-09-14T11:06:35.000+0000',
                                'modified': '2018-09-14T11:08:49.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4595,
                                        'price': 35,
                                        'serving': 'Serves 1',
                                        'created': '2018-09-14T11:07:33.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3448,
                                'name': 'Buffalo Sauce',
                                'description': 'Limited menu item. Only served with Rotisserie Chicken.',
                                'created': '2018-09-14T11:07:14.000+0000',
                                'modified': '2018-09-14T11:08:55.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4596,
                                        'price': 35,
                                        'serving': 'Serves 1',
                                        'created': '2018-09-14T11:07:42.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 77,
                        'name': 'SHAKES',
                        'created': '2018-01-11T09:49:51.000+0000',
                        'modified': '2018-01-11T09:49:51.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 354,
                                'name': 'Shakes',
                                'description': 'Shakes',
                                'created': '2018-01-11T10:57:59.000+0000',
                                'modified': '2018-01-11T10:57:59.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 424,
                                        'price': 252,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-11T11:03:51.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 78,
                        'name': 'Fresh Juices',
                        'created': '2018-01-11T09:50:00.000+0000',
                        'modified': '2018-01-11T09:50:00.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 355,
                                'name': 'Apple Juice                                                           ',
                                'description': 'Apple Juice',
                                'created': '2018-01-11T11:20:17.000+0000',
                                'modified': '2018-04-13T17:05:16.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 425,
                                        'price': 259,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-11T11:21:03.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 356,
                                'name': 'Peach Juice                                                            ',
                                'description': 'Peach Juice',
                                'created': '2018-01-11T11:21:27.000+0000',
                                'modified': '2018-04-13T17:05:27.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 426,
                                        'price': 259,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-11T11:21:48.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 357,
                                'name': 'Strawberry Juice                                                           ',
                                'description': 'Strawberry Juice',
                                'created': '2018-01-11T11:22:15.000+0000',
                                'modified': '2018-04-13T17:05:36.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 427,
                                        'price': 259,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-11T11:22:32.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 358,
                                'name': 'Pomegranate Juice',
                                'description': 'Pomegranate Juice',
                                'created': '2018-01-11T11:23:01.000+0000',
                                'modified': '2018-04-13T17:05:48.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 428,
                                        'price': 259,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-11T11:23:16.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 359,
                                'name': 'Orange Juice',
                                'description': 'Orange Juice',
                                'created': '2018-01-11T11:24:10.000+0000',
                                'modified': '2018-04-13T17:05:56.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 429,
                                        'price': 194,
                                        'serving': 'Serves 1',
                                        'created': '2018-01-11T11:24:31.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 1089,
                                'name': 'Watermelon',
                                'description': ' ',
                                'created': '2018-05-03T09:38:41.000+0000',
                                'modified': '2018-05-03T09:38:41.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 1371,
                                        'price': 259,
                                        'serving': 'Serves 1',
                                        'created': '2018-05-03T09:39:07.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 83,
                        'name': 'DEALS',
                        'created': '2018-02-01T05:00:54.000+0000',
                        'modified': '2018-02-01T05:03:31.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 370,
                                'name': 'Wowdy Hours 2 Burgers                                                                               ',
                                'description': 'Timings: 04:00 PM - 07:00 PM. Any 2 Single Patty Burger meals of your choice with complimentary drink and plain fries.',
                                'created': '2018-02-01T05:16:11.000+0000',
                                'modified': '2018-06-19T16:31:57.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 440,
                                        'price': 999,
                                        'serving': 'Meal Serves 2',
                                        'created': '2018-02-01T05:16:51.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 371,
                                'name': 'Wowdy Hours 3 Burgers                                                                               ',
                                'description': 'Timings: 04:00 PM - 07:00 PM. Any 3 Single Patty Burger meals of your choice with complimentary drink and plain fries.',
                                'created': '2018-02-01T05:38:45.000+0000',
                                'modified': '2018-06-19T17:55:28.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 443,
                                        'price': 1399,
                                        'serving': 'Meal Serves 3',
                                        'created': '2018-02-01T05:43:04.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 379,
                                'name': 'Midnight Deal 2 Burgers                                                            ',
                                'description': 'Timings: 11:00 PM - 01:00 AM. Any 2 Single Patty Burger meals of your choice with complimentary drink and plain fries.',
                                'created': '2018-02-03T16:14:29.000+0000',
                                'modified': '2018-06-19T18:03:09.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 453,
                                        'price': 999,
                                        'serving': 'Meal Serves 2',
                                        'created': '2018-02-03T16:14:49.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 380,
                                'name': 'Midnight Deal 3 Burgers                                                                             ',
                                'description': 'Timings: 11:00 PM - 01:00 AM. Any 3 Single Patty Burger meals of your choice with complimentary drink and plain fries.',
                                'created': '2018-02-03T16:15:20.000+0000',
                                'modified': '2018-06-19T18:03:57.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 454,
                                        'price': 1399,
                                        'serving': 'Meal Serves 3',
                                        'created': '2018-02-03T16:15:39.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 474,
                                'name': 'Wowdy Wacky Deal 2 Burgers                                                                          ',
                                'description': 'Timings: 04:00 PM - 07:00 PM. Any 2 Value Burger meals with complimentary drink and plain fries.',
                                'created': '2018-02-09T16:06:03.000+0000',
                                'modified': '2018-06-19T18:06:44.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 544,
                                        'price': 699,
                                        'serving': 'Meal Serves 2',
                                        'created': '2018-02-09T16:06:52.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 475,
                                'name': 'Wowdy Wacky Deal 3 Burgers                                                                          ',
                                'description': 'Timings: 04:00 PM - 07:00 PM. Any 2 Value Burger meals with complimentary drink and plain fries.',
                                'created': '2018-02-09T16:14:59.000+0000',
                                'modified': '2018-06-19T18:07:42.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 545,
                                        'price': 999,
                                        'serving': 'Meal Serves 3',
                                        'created': '2018-02-09T16:15:36.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 87,
                        'name': 'Cockaroo Buckaroo-Rotisserie Chicken                                            ',
                        'created': '2018-02-03T15:29:56.000+0000',
                        'modified': '2018-02-12T17:35:21.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 375,
                                'name': 'Rotisserie Half Chicken',
                                'description': 'Our special chicken with mild spices. Served with 2 sides of your choice along with Buffalo and Green Sauce',
                                'created': '2018-02-03T15:33:23.000+0000',
                                'modified': '2018-02-12T17:11:55.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 450,
                                        'price': 549,
                                        'serving': 'Half Chicken',
                                        'created': '2018-02-03T15:36:16.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 376,
                                'name': 'Rotisserie Full Chicken',
                                'description': 'Our special chicken with mild spices. Served with 2 sides of your choice along with Buffalo and Green Sauce\n ',
                                'created': '2018-02-03T15:34:41.000+0000',
                                'modified': '2018-02-12T17:11:17.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 449,
                                        'price': 899,
                                        'serving': 'Full Chicken',
                                        'created': '2018-02-03T15:35:04.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 202,
                        'name': 'RAMADAN SPECIALS                                            ',
                        'created': '2018-05-16T16:44:39.000+0000',
                        'modified': '2018-06-19T18:08:15.000+0000',
                        'deleted': true,
                        'menuItemsById': [
                            {
                                'id': 1098,
                                'name': 'Iftar Reservation                                                            ',
                                'description': 'Mention the number of persons visiting and kind of group (Family, Mixed Groups, Stags etc) in Special Instructions. Guests are required to show up 45 mins before Iftar otherwise the reservation will be considered cancelled.',
                                'created': '2018-05-16T16:46:54.000+0000',
                                'modified': '2018-06-19T18:08:15.000+0000',
                                'deleted': true,
                                'menuItemTypesById': [
                                    {
                                        'id': 1380,
                                        'price': 0,
                                        'serving': 'Reservation only',
                                        'created': '2018-05-16T16:48:05.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': true
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 1100,
                                'name': 'Sehri Reservation',
                                'description': 'Mention the number of persons visiting and kind of group (Family, Mixed Groups, Stags etc) in Special Instructions. Guests are required to show up 45 mins  before Sehri otherwise the reservation will be considered cancelled.',
                                'created': '2018-05-16T16:54:50.000+0000',
                                'modified': '2018-06-19T18:08:15.000+0000',
                                'deleted': true,
                                'menuItemTypesById': [
                                    {
                                        'id': 1382,
                                        'price': 0,
                                        'serving': 'Reservation Only',
                                        'created': '2018-05-16T16:55:12.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': true
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 1102,
                                'name': 'Iftaar Caboodle (Platter)',
                                'description': 'Includes Fruit Salad, Pasta Salad, Two Shashlik Sticks, Two Croquettes, Banana Pudding and any Single Patty Burger. Served with a soft drink of your choice.',
                                'created': '2018-05-16T18:48:34.000+0000',
                                'modified': '2018-06-19T18:08:15.000+0000',
                                'deleted': true,
                                'menuItemTypesById': [
                                    {
                                        'id': 1384,
                                        'price': 999,
                                        'serving': 'Serves 1',
                                        'created': '2018-05-16T18:49:03.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': true
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 566,
                        'name': 'GRANDWICHES',
                        'created': '2018-09-02T15:27:00.000+0000',
                        'modified': '2018-09-02T15:27:00.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 3435,
                                'name': 'El Clasico',
                                'description': 'Chicken Club Sandwich. A chicken sandwich with enriched taste of egg & cheese',
                                'created': '2018-09-02T15:28:34.000+0000',
                                'modified': '2018-09-02T15:43:30.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4579,
                                        'price': 699,
                                        'serving': 'Chicken',
                                        'created': '2018-09-02T15:38:29.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3436,
                                'name': 'John The Don',
                                'description': 'Mac n Cheese Sandwich. Available in Beef or Chicken. Chopped beef or chicken with macaroni cheese along with bologna slices',
                                'created': '2018-09-02T15:31:33.000+0000',
                                'modified': '2018-09-02T15:43:57.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4580,
                                        'price': 799,
                                        'serving': 'Chicken',
                                        'created': '2018-09-02T15:39:04.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    },
                                    {
                                        'id': 4581,
                                        'price': 849,
                                        'serving': 'Beef',
                                        'created': '2018-09-02T15:39:09.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3437,
                                'name': 'Magnumagma',
                                'description': 'Beef Patty Melt Sandwich.  Minced Beef along with Pickles and cheese slices in whole grain toasted bread',
                                'created': '2018-09-02T15:33:24.000+0000',
                                'modified': '2018-09-02T15:33:24.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4582,
                                        'price': 649,
                                        'serving': 'Beef',
                                        'created': '2018-09-02T15:39:33.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3438,
                                'name': 'Legends of the West',
                                'description': 'Oriental Beef Egg Sandwich. A great mixture of cubical beef, saute veggies, cheese, egg and Oriental Mayo',
                                'created': '2018-09-02T15:35:54.000+0000',
                                'modified': '2018-09-02T15:46:34.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4583,
                                        'price': 749,
                                        'serving': 'Beef',
                                        'created': '2018-09-02T15:39:55.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3439,
                                'name': 'Rocambolesco',
                                'description': 'Philly steak cheese sandwich. Traditional shredded beef along with cheese and saute veggies.',
                                'created': '2018-09-02T15:37:05.000+0000',
                                'modified': '2018-09-02T15:37:05.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4584,
                                        'price': 699,
                                        'serving': 'Chicken',
                                        'created': '2018-09-02T15:41:01.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    },
                                    {
                                        'id': 4585,
                                        'price': 699,
                                        'serving': 'Beef',
                                        'created': '2018-09-02T15:41:09.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3440,
                                'name': 'B Eastwood',
                                'description': 'Grilled Chicken Cheese Sandwich. Django Chicken chunks assorted in mild sauce',
                                'created': '2018-09-02T15:38:00.000+0000',
                                'modified': '2018-09-02T15:38:00.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4586,
                                        'price': 649,
                                        'serving': 'Chicken',
                                        'created': '2018-09-02T15:41:28.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 568,
                        'name': 'SIDES',
                        'created': '2018-09-14T12:07:16.000+0000',
                        'modified': '2018-09-14T12:07:16.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 3451,
                                'name': 'Mashed Potatoes',
                                'description': 'Limited menu item. Only served with Steaks and Rotisserie Chicken.',
                                'created': '2018-09-14T12:07:36.000+0000',
                                'modified': '2018-09-14T12:15:05.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4599,
                                        'price': 60,
                                        'serving': 'Serves 1',
                                        'created': '2018-09-14T12:13:52.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3452,
                                'name': 'Saute Veggies',
                                'description': 'Limited menu item. Only served with Steaks and Rotisserie Chicken',
                                'created': '2018-09-14T12:07:47.000+0000',
                                'modified': '2018-09-14T12:15:12.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4600,
                                        'price': 120,
                                        'serving': 'Serves 1',
                                        'created': '2018-09-14T12:14:02.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3453,
                                'name': 'Mexican Rice                                                            ',
                                'description': 'Limited menu item. Only served with Rotisserie Chicken.',
                                'created': '2018-09-14T12:13:28.000+0000',
                                'modified': '2018-09-14T12:27:04.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4601,
                                        'price': 60,
                                        'serving': 'Serves 1 ',
                                        'created': '2018-09-14T12:14:20.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    },
                    {
                        'id': 570,
                        'name': 'Birthday Reservations',
                        'created': '2018-09-14T12:36:05.000+0000',
                        'modified': '2018-09-14T12:36:05.000+0000',
                        'deleted': false,
                        'menuItemsById': [
                            {
                                'id': 3457,
                                'name': 'For 2-4 persons',
                                'description': 'Decor details: 15 Balloons, 1 Party Popper, 1 candle, 1 snow spray, 1 birthday sign. Dedicated servers, Birthday song. No charges for own decor.',
                                'created': '2018-09-14T12:47:18.000+0000',
                                'modified': '2018-09-14T12:47:18.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4605,
                                        'price': 1000,
                                        'serving': 'Charges',
                                        'created': '2018-09-14T12:47:33.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3458,
                                'name': 'For 5-10 persons',
                                'description': 'Decor details: 40 Balloons, Fresh Flowers, 2 Party Poppers, 2 candles, 1 snow spray, 1 birthday sign. Dedicated servers, Birthday song. No charges for own decor.',
                                'created': '2018-09-14T12:59:07.000+0000',
                                'modified': '2018-09-26T14:02:10.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4606,
                                        'price': 2500,
                                        'serving': 'Charges',
                                        'created': '2018-09-14T13:02:04.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3459,
                                'name': 'For 11-20 persons',
                                'description': 'Decor details: 45 Balloons, 2 Party Popper, 2 candle, 4 snow spray, 1 birthday sign. Dedicated servers, Birthday song. No charges for own decor.',
                                'created': '2018-09-14T13:00:24.000+0000',
                                'modified': '2018-09-14T13:00:24.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4607,
                                        'price': 200,
                                        'serving': 'Charges',
                                        'created': '2018-09-14T13:02:14.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            },
                            {
                                'id': 3460,
                                'name': 'For 20 plus persons',
                                'description': 'Decor details: 50 Balloons, 2 Party Poppers, 2 candles, 4 snow sprays, 1 birthday sign. Dedicated servers, Birthday song.  No charges.',
                                'created': '2018-09-14T13:01:45.000+0000',
                                'modified': '2018-09-14T13:01:45.000+0000',
                                'deleted': false,
                                'menuItemTypesById': [
                                    {
                                        'id': 4608,
                                        'price': 0,
                                        'serving': 'Charges',
                                        'created': '2018-09-14T13:02:32.000+0000',
                                        'modified': '2018-11-27T09:01:15.000+0000',
                                        'deleted': false
                                    }
                                ],
                                'menuItemAdOns': []
                            }
                        ]
                    }
                ])
                    .then(
                        () => {
                        },
                        error => console.error('Error storing item', error)
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
