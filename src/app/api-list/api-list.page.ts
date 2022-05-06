import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular';
import { InfoModalComponent } from '../info-modal/info-modal.component';


@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.page.html',
  styleUrls: ['./api-list.page.scss'],
})
export class ApiListPage implements OnInit {

  characters = []

  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        this.characters = res.results;
      })
  }

  async openModal(id:number) {
    const modal = await this.modalCtrl.create({
      component: InfoModalComponent,
      componentProps: {
        id: id
      }
    });

    await modal.present();
  }

  async onDelete(id:number, slidingItem){ 
    const index= this.characters.findIndex(element => element.id == id)
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          id: 'cancel-button',
          handler: () => {
            slidingItem.close()
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.characters.splice(index, 1)
            console.log('Confirm Okay');
          }
        }
      ]
    });
    alert.present()
  }

}
