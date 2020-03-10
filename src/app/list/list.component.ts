import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "../http.service";
import { formatDistance } from 'date-fns';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  articles: Object;
  @Input() ddd: string;
  //myDate = formatDistance(this.ddd, new Date())
  myDate = this.ddd;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getList().subscribe(data => {
      this.articles = data["articles"];
      console.log(this.articles)

    });

  }

}
