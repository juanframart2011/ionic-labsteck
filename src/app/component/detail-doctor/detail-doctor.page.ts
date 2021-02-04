import { Component, Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Doctor } from 'src/app/interface/doctor';

@Component({
  selector: 'app-detail-doctor',
  templateUrl: './detail-doctor.page.html',
  styleUrls: ['./detail-doctor.page.scss'],
})
export class DetailDoctorPage {

  @Input() doctor: Doctor;

  constructor( public modalController: ModalController ){}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}