import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) {}
  
  series: Array<Serie> = dataSeries;

  getSeriesList() {
    this.serieService.getSeries().subscribe(ss => {
      this.series = ss;
    });
  }
  ngOnInit() {
    this.getSeriesList();
  }
}