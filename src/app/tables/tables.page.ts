import { Component, OnInit } from '@angular/core';
import {LocalinfoService} from '../services/resturent/localinfo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {PopoverPage} from '../popover/popover.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss'],
})
export class TablesPage implements OnInit {


    tables = [];
    isLoaded=false;

    type = '';
  constructor(public resturentInfo: LocalinfoService,
              private storage: Storage,
              private router: Router,
              public modalCtrl: ModalController,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          this.type = params['type'];
          this.storage.get('tables').then((data) => {

              this.tables = data;
              this.isLoaded=true;

              console.log(data);

          }, error => {
              console.log('error while getting tables');

          });


      })


  }

    async openMenuModal(tablename: any) {
        const modal = await this.modalCtrl.create({
            component: PopoverPage,
            componentProps: {
                table: tablename,
                type: this.type
            }

        });
        await modal.present();
    }
    gotoMenu(tablename: string) {
        this.router.navigate(['/menu'], {queryParams: {type: 'dine', edit: true, table: tablename}});

    }
}
