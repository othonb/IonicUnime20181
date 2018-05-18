import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VariaveisGlobaisProvider } from '../../providers/variaveis-globais/variaveis-globais';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //private usuario : String;
  private senha : String;
  //private estaLogado : Boolean;

  public constructor(
    private variaveisGlobais : VariaveisGlobaisProvider
  ) {

    //this.usuario = null;
    //this.senha = null;
    //this.estaLogado = false;

    this.iniciaVariaveis ();

  }

  private iniciaVariaveis () {

    this.variaveisGlobais.setEstaLogado (false);

    this.variaveisGlobais.setUsuario (null);

    this.senha = null;



  }

  private ionViewDidLoad() {  }

  private ionViewDidEnter() {  }

  private entraNoSistema () {

    this.senha = null;

    //this.estaLogado = true;

    //this.variaveisGlobais.setUsuario (this.usuario);
    //this.variaveisGlobais.setEstaLogado (this.estaLogado);

    this.variaveisGlobais.setEstaLogado (true);

  }

  private saiDoSistema () {

    //this.usuario = null;
    //this.senha = null;

    //this.estaLogado = false;

    this.iniciaVariaveis ();

  }

}
