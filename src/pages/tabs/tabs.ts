import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  private tab1Root = HomePage;
  private tab2Root = AboutPage;
  private tab3Root = ContactPage;
  private tab4Root = LoginPage;

  constructor() {

  }
}
