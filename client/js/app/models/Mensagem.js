class Mensagem {

  constructor(texto = '') {
    this._texto = texto;
  }

  get texto() {
    return this._texto
  }

  set texto(txt) {
    this._texto = txt;
  }
  
}
