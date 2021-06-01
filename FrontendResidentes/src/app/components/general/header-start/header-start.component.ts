import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-start',
  templateUrl: './header-start.component.html',
  styleUrls: ['./header-start.component.scss'],
})
export class HeaderStartComponent implements OnInit {

  @Input() titulo: string;

  @Input() back : string = "NO";

  @Input() routeBack : string;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  goBack(){
    this.navCtrl.navigateBack(this.routeBack);
  }

}
