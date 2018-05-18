import { Injectable } from '@angular/core';

@Injectable()
export class VariaveisGlobaisProvider {

  private usuario : String;
  private estaLogado : Boolean;

  public constructor() {  

    this.usuario = null;
    this.estaLogado = false;

  }

  public getUsuario () : String {

    return this.usuario;

  }

  public setUsuario (usuario : String) {

    this.usuario = usuario;

  }

  public isEstaLogado () : Boolean {

    return this.estaLogado;

  }

  public setEstaLogado (estaLogado : Boolean) {

    this.estaLogado = estaLogado;

  }

}
