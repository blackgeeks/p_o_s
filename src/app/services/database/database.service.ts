import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) { }

  getData(){

      this.sqlite.create({
          name: 'data.db',
          location: 'default'
      }).then((db: SQLiteObject) => {


              db.executeSql('create table danceMoves(name VARCHAR(32))')
                  .then(() => {console.log('Executed SQL'),
                  alert('database created')})
                  .catch(e => console.log(e));


          })
          .catch(e => console.log(e));
  }
}
