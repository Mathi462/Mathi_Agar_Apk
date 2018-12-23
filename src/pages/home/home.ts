import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagePage } from '../image/image';
import { EventPage } from '../event/event';
import { RegisterPage } from '../register/register';
import { DonationPage } from '../donation/donation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slideData =[{image :"../../assets/imgs/img1.jpeg"} ,
  {image: "../../assets/imgs/img2.jpeg"},
  {image: "../../assets/imgs/img3.jpeg"},
  {image: "../../assets/imgs/img4.jpeg"},
  {image: "../../assets/imgs/img5.jpeg"}];

  imageCall(){
    this.navCtrl.push(ImagePage);
  }

  eventCall(){
    this.navCtrl.push(EventPage);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  donationCall(){
    this.navCtrl.push(DonationPage);
  }
}
