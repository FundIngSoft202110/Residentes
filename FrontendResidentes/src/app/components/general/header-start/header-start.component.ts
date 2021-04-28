import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-start',
  templateUrl: './header-start.component.html',
  styleUrls: ['./header-start.component.scss'],
})
export class HeaderStartComponent implements OnInit {

  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
