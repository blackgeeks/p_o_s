import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TablesinfoService {

    public tables = [];

    constructor(private storage: Storage) {

        this.storage.get('tables').then((data) => {

            console.log(data);
            this.tables = data;
            return this.tables;
        }, error => {
            console.log('error while retreiving resturent');
            return this.tables
        });
    }

    getTables(){

      return this.tables;


    }
    refreshtablestats(){
        this.storage.get('tables').then((data) => {

            this.tables = data;

            return this.tables;
        }, error => {
            console.log('error while getting tables')
            return this.tables
        });
    }
}
