import { Component, OnInit } from '@angular/core';
import {CartserviceService} from '../../../services/cartservice.service';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {ModalController, NavParams} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {ToastmanagerService} from '../../../services/toast/toastmanager.service';
@Component({
  selector: 'app-settlementpopover',
  templateUrl: './settlementpopover.page.html',
  styleUrls: ['./settlementpopover.page.scss'],
})
export class SettlementpopoverPage implements OnInit {

  amount=0;
  table='';
  constructor(public cartService: CartserviceService,
              private router: Router,
              private storage: Storage,
              public navParams: NavParams,
              private toastManager: ToastmanagerService,
              public alertController: AlertController,
              public modalCtrl: ModalController) { }

  ngOnInit() {
      this.table = this.navParams.get('table');

  }
    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Payment Completed???',
            buttons: [
                {
                    text: 'No, Get me back',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                      if(this.amount-this.cartService.getGrandTotal() >= 0){
                          this.storage.get('tables').then((data) => {

                              for (let table of data) {
                                  if (table.name == this.table) {
                                      table.status = 'empty';
                                      this.modalCtrl.dismiss()

                                  }
                              }

                              console.log(data);

                              this.storage.remove('tables');
                              this.storage.set('tables', data);

                              setTimeout(() => {
                                  this.storage.get('tables').then((data) => {
                                      console.log(data)
                                  })

                              }, 100);
                              setTimeout(() => {
                                  this.router.navigate(['/home'])

                              }, 500);

                          }, error => {
                              console.log('error while retreiving resturent');
                          });
                      }
                      else {
                       this.toastManager.presentToastWithCustomOptions('Please add amount taken by customer');
                      }

                    }
                }
            ]
        });

        await alert.present();
    }
    finishpayment(){

    this.presentAlertConfirm();


    }

}
