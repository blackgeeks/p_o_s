import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private router: Router,public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  menu(event){
    console.log(event);
    this.modalCtrl.dismiss();
      this.router.navigate(['/menu']);

  }
}
