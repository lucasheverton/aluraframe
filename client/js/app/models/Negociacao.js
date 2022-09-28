class Negociacao {

  // definindo os atributos da classe atraves do construtor
  // recebendo os valores da instância como parâmetro (do objeto que está sendo criado em outro lugar)
  constructor(date, qtd, value) {

    // o this serve como referência para as instâncias (objetos criados a partir dessa classe)

    // o "_" significa que as propriedades que possuem o "_" só podem ser acessadas pelo próprios métodos da classe (encapsulamento)

    this._data = new Date(date.getTime());
    this._quantidade = qtd;
    this._valor = value;

    // com o Object.freeze podemos congelar o objeto e impedir a alteração dos valores da propriedades dentro dele. 
    Object.freeze(this);
  }

  // uma função dentro de uma classe = Método
  // uma função fora de uma classe = Função

  
  // quado criamos os getters podemos acessar eles como propriedade na hora da instância.

  get data() {
    // criando uma nova referência de data e impedindo a alteração
    return new Date(this._data.getTime());
  }
  
  get quantidade() {
    return this._quantidade;
  }
  
  get valor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }

}
