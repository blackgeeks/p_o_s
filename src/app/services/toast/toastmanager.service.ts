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
            closeButtonText: 'Done',
            duration: 2000
        });
        toast.present();
    }
}
