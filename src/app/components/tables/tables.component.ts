import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {PopoverPage} from '../../popover/popover.page';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {


    tables = [];
    isLoaded=false;

    type = '';
  constructor(private storage: Storage,
              private router: Router,public modalCtrl: ModalController,
    private route: ActivatedRoute) { }

  ngOnInit() {
    alert('compo')
      this.storage.get('tables').then((data) => {

          this.tables = data;
          this.isLoaded=true;

          console.log(data);

      }, error => {
          console.log('error while getting tables');

      });
  }
    gotoMenu(tablename: string) {
        this.router.navigate(['/menu'], {queryParams: {type: 'dine', edit: true, table: tablename}});

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

}
