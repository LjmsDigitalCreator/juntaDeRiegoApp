import { Component, Input } from '@angular/core';

@Component({
  selector: 'cTitle',
  templateUrl: 'title.html',
  styleUrls: ['title.css'],
})

export class cTitle {
  @Input()title: '';
  @Input()subTitle: '';
  constructor() {}
}
