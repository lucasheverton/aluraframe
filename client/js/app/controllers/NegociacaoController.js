class NegociacaoController {

  constructor() {
    
    this._inputData = document.querySelector('#data');
    this._inputQuantidade = document.querySelector('#quantidade');
    this._inputValor = document.querySelector('#valor');
    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoes-view'));
    this._negociacoesView.update(this._listaNegociacoes);
  
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView(document.querySelector('#mensagem-view'));
    this._mensagemView.update(this._mensagem);
  }

  adiciona(event) {
    event.preventDefault();    

    this._listaNegociacoes.adiciona(this._criaNegociacao());
    this._negociacoesView.update(this._listaNegociacoes);
    
    this._limpaFormulario();
    
    this._mensagem.texto = "Negociação adicionada com sucesso.";
    this._mensagemView.update(this._mensagem);

    console.info(this._listaNegociacoes.negociacoes);
  }

  _criaNegociacao() {
    // consigo invocar o método direto da classe sem instaciar por causa do "static"
    let data = DateHelper.textoParaData(this._inputData.value);
    
    return new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }

}
