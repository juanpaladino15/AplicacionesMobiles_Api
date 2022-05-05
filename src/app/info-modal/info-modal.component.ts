import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
})
export class InfoModalComponent implements OnInit{

  id: Number;
  character;

  constructor(
    private modalCtrl: ModalController,
    private activateRout: ActivatedRoute,
    private http: HttpClient,
    public loadingController: LoadingController) {
  }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character/' + this.id)
      .subscribe(res => this.character = res);
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}
