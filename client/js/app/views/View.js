class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

  // esse método é sobrescrito pelos métodos templates das classes filhas
  template() {
    throw new Error("O método template deve ser implementado");
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }
}
