import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class TablesinfoService {

    public tables = [];
    public occupiedTables = [];
    public freeTables = [];

    constructor(private storage: Storage) {

        // this.setTables()
    }

    getTables() {

        return this.tables;


    }

    refreshtablestats() {
        this.storage.get('tables').then((data) => {

            this.tables = data;

            return this.tables;
        }, error => {
            console.log('error while getting tables');
            return this.tables;
        });
        return this.tables;
    }

    getOccupiedTables() {
        this.storage.get('tables').then((data) => {

            this.occupiedTables = data.filter(d => d.status == 'on going' || d.status=='bill processing');


            return this.occupiedTables

        }, error => {
            console.log('error while getting tables');
            return this.occupiedTables
        });
       return this.occupiedTables;

    }

    getFreeTables() {
        this.storage.get('tables').then((data) => {

            this.freeTables = data.filter(d => d.status == 'empty');
            console.log(this.freeTables);

            return this.freeTables

        }, error => {
            console.log('error while getting tables');
            return this.freeTables
        });

        return this.freeTables;
    }

    setTables(){
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


}
