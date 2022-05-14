import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ModalController } from '@ionic/angular';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { Toast } from '@capacitor/toast';
import { Storage } from '@capacitor/Storage';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.page.html',
  styleUrls: ['./api-list.page.scss'],
})
export class ApiListPage implements OnInit {

  characters: Array<any> = []
  showHelloToast = async () => {
    await Toast.show({
      text: 'Hello!',
    });
  };

  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {

    Storage.get({key: 'RyM'}).then((characters:{value: string})=>{
      if(characters && characters.value && characters.value.length > 0){
        this.characters = JSON.parse(characters.value);

        Toast.show({
          text: 'Se consiguieron los valores del Storage',
        });

      } else {
        this.http.get<any>('https://rickandmortyapi.com/api/character')
        .subscribe(res => {
          this.characters = res.results;

          Storage.set({
            key: 'RyM',
            value: JSON.stringify(res.results),
          })
        })

        Toast.show({
          text: 'Se consiguieron los valores de la API',
        });

      }
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
      header: 'Eliminar',
      message: '¿Desea eliminar el elemento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: () => {
            slidingItem.close()
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Eliminar',
          id: 'confirm-button',
          handler: () => {
            this.characters.splice(index, 1)
            Toast.show({
              text: 'Personaje eliminado.'
            })
            console.log('Confirm Okay');
          }
        }
      ]
    });
    alert.present()
  }

}
