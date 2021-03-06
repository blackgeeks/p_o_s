import {Component, OnInit} from '@angular/core';
import {TablesinfoService} from '../../../services/tables/tablesinfo.service';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';

@Component({
    selector: 'app-transfertable',
    templateUrl: './transfertable.page.html',
    styleUrls: ['./transfertable.page.scss'],
})
export class TransfertablePage implements OnInit {

    occupiedtables = [];

    occupiedTableSected: any;
    FreeTableSected: any;

    constructor(public tableInfo: TablesinfoService,
                private storage: Storage,
                public alertController: AlertController,
                public modalCtrl: ModalController,
                private router: Router) {
        this.tableInfo.getOccupiedTables();
        this.tableInfo.getFreeTables();

    }

    ngOnInit() {

    }

    selectFreeTable() {
    }
    selectOccupiedTable() {
    }
    transferTable(){
      if(this.FreeTableSected && this.occupiedtables){

          this.storage.get('tables').then((data) => {

            let occupyIndex:any;
            let freeIndex:any;

              for (let table in data) {
                  if (data[table].name == this.occupiedTableSected) {
                    occupyIndex=table;
                  }

                  if (data[table].name == this.FreeTableSected) {
                      freeIndex=table;
                  }



              }

              console.log(freeIndex)
              console.log(occupyIndex)

              data[freeIndex].status=data[occupyIndex].status;
              data[occupyIndex].status='empty'

              this.storage.remove('tables');

              this.storage.set('tables', data);

              console.log(data)

              this.storage.get(this.occupiedTableSected).then((data) => {

                  this.storage.set(this.FreeTableSected, data)
              })

              this.storage.remove(this.occupiedTableSected);

              this.modalCtrl.dismiss()
              setTimeout(() => {
                  this.tableInfo.refreshtablestats();
                  this.router.navigate(['/dine'],{queryParams: {type:'dine'}});
              }, 200);
          }, error => {
              console.log('error while getting tables');
          });

      }
      else {
        alert('Please select Tables first')
      }
    }


    async confirmationbeforePlaceorder() {
        const alert = await this.alertController.create({
            header: 'Transfer Confirmation!',
            message: 'Are you sured to transfer table?',
            buttons: [
                {
                    text: 'No, Get me back',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        //console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.transferTable()
                    }
                }
            ]
        });

        await alert.present();
    }

}
