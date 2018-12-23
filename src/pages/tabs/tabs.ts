import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ImagePage } from '../image/image';
import { DonationPage } from '../donation/donation';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ImagePage;
  tab3Root = DonationPage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
