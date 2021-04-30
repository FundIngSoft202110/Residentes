import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import notify from 'devextreme/ui/notify';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-manual-admin-component',
  templateUrl: './manual-admin-component.component.html',
  styleUrls: ['./manual-admin-component.component.scss'],
})
export class ManualAdminComponent implements OnInit {

  @ViewChild('form') form: NgForm;

  updateClick() {
      notify('El manual a sido actualizado');
      
  }
  constructor() { 
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
  }

  ngOnInit() {}

}
