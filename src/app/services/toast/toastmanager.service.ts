import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastmanagerService {

  constructor(public toastController: ToastController) { }

    async presentToastWithCustomOptions(message: any) {
        const toast = await this.toastController.create({
            message: message,
            showCloseButton: true,
            position: 'middle',
            closeButtonText: 'OK',
            duration: 1000
        });
        toast.present();
    }
}
