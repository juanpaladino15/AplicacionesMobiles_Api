import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.page.html',
  styleUrls: ['./api-list.page.scss'],
})
export class ApiListPage implements OnInit {

  characters = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        this.characters = res.results;
      })
  }

}
