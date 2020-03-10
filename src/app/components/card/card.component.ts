import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/pages/home/home.component';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() country: Country;

  constructor() { }

  ngOnInit() {
  }

}
