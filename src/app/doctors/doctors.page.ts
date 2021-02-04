import { Component, OnInit } from '@angular/core';
import { Doctor } from '../interface/doctor';
import { DoctorService } from '../service/doctor.service';
import { LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DetailDoctorPage } from '../component/detail-doctor/detail-doctor.page';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {

  doctors:Doctor[] = [];
  isLoading:boolean = true;

  constructor( private doctorService:DoctorService, public loadingController: LoadingController,
    public modalController: ModalController ) { }

  async presentLoading() {

    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Cargando doctores'
    }).then(a => {
        a.present().then(() => {
            if (!this.isLoading) {
                a.dismiss().then();
            }
        });
    });
  }

  async closeLoading(){
        
      this.isLoading = false;
      return await this.loadingController.dismiss().then();
  }

  async detailDoctor( doctorIndex:number ){
    console.info( "detail => ", this.doctors[doctorIndex] );
    const modal = await this.modalController.create({
      component: DetailDoctorPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'doctor': this.doctors[doctorIndex]
      }
    });
    return await modal.present();
  }

  ngOnInit(){

    this.presentLoading();
    this.getList();
  }

  getList(){

    this.doctorService.getList().subscribe(drs => {

      this.doctors = drs.content;
      this.closeLoading();
    });
  }
}