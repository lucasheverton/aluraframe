class DateHelper {

  constructor() {
    throw new Error('Esta classe não pode ser instanciada');
  }

  // métodos estáticos (static) -> são métodos que pertencem a definição da class

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

  static textoParaData(texto) {
    
    if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
      throw new Error("Deve estar no pardão 'aaaa-mm-dd' !");
    }
    return new Date(...texto.split('-').map((item, index) =>  index == 1 ? item - 1 : item ));
  }

}
