import { Component } from '@angular/core';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {

  title: string;
  disableDrag_tf: boolean;

  constructor() {
    this.title = 'Page1';
    this.disableDrag_tf = false;
  }


  // disable drag
  disableDrag(evt) {
    this.disableDrag_tf = true;
    console.log('Disable drag: ', this.disableDrag_tf);
    evt.preventDefault();
    evt.stopPropagation();
  }

  // enable drag
  enableDrag() {
    this.disableDrag_tf = false;
    console.log('Enable drag: ', this.disableDrag_tf);
  }

}
