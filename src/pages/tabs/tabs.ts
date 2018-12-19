import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ImagePage } from '../image/image';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ImagePage;
  tab3Root = ContactPage;
  tab4Root = AboutPage;
  tab5Root = ContactPage;

  constructor() {

  }
}