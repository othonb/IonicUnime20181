import { Component } from '@angular/core';
import { VariaveisGlobaisProvider } from '../../providers/variaveis-globais/variaveis-globais';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    private variaveisGlobais : VariaveisGlobaisProvider
  ) {  }

}
