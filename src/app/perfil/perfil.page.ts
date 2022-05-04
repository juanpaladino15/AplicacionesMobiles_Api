import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfilId: String;
  character;

  constructor(
    private activateRout: ActivatedRoute,
    private http: HttpClient,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.perfilId = this.activateRout.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/' + this.perfilId)
      .subscribe(res => this.character = res);
  }

}
