import { Component, OnInit, Input } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  @Input() menu : string;

  @Input() routeBack: string;

  constructor( private menuCtrl: MenuController, private navCtrl: NavController) { 
  }

  ngOnInit() {}

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  goBack(){
    this.navCtrl.navigateBack(this.routeBack);
  }

}