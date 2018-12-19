import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private reg : FormGroup;
  result: any;

  constructor(public navCtrl: NavController,
              // public apiProvider: ApiProvider, 
              public toastCtrl: ToastController,
              public navParams: NavParams,private formBuilder: FormBuilder) {

    this.reg = this.formBuilder.group({

      name:['',Validators.required],
      email:['',Validators.required],
      gender:['',Validators.required],
      mobile:['',Validators.required],
      blood_group:['',Validators.required],
      work:['',Validators.required],
      state:['',Validators.required],
      district:['',Validators.required],
      voluntary:['',Validators.required],
      blood_donate:['',Validators.required]

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    console.log(this.reg.value);
    // this.memberRegister();

  }

  // memberRegister() {
  //   this.apiProvider.postData('/registers/register', this.reg.value).then(d => {
  //     this.result = d;
  //     console.log(this.result);
  //     this.reg.reset();
  //     this.showToast();
  //     this.navCtrl.push(HomePage);
      
  //   });
  // }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Registration Successfull',
      duration: 2000,
      position: 'bottom'
    });

    toast.present(toast);
  }

}
