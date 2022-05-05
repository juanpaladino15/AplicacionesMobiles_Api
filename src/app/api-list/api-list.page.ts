import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
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
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        this.characters = res.results;
      })
  }

  async openModal(id:Number) {
    const modal = await this.modalCtrl.create({
      component: InfoModalComponent,
      componentProps: {
        id: id
      }
    });

    await modal.present();
  }

}
