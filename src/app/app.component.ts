import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ILabData } from './ilab-data';
import '../webcomponent/lit-demo.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-app';
  
  labData:ILabData[];

  constructor(private dataService: DataService) {
    this.labData=[{"test":"", "unit":"", "min":0,"max":0, "value":0}];
    this.dataService.getLabValues().subscribe(sampleData => this.labData = sampleData);;
  }

  showAlert(e:Event) {
    alert ( ((e as CustomEvent).detail.message));
  }
}

