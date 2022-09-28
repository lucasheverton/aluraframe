const campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

console.info(campos)

//escutando eventos

const $form = document.querySelector('.form');
const $tbody = document.querySelector('tbody');

$form.addEventListener('submit', ($event) => {

  $event.preventDefault();

  // criando um elemento no DOM
  const tr = document.createElement('tr');
  campos.forEach((item) => {
    // criando a tag td no dom
    const td = document.createElement('td');
    // atribuindo o valor de cada campo extraido e colocando como texto dentro da td
    td.textContent = item.value;
    // colocando a td dentro da tr
    tr.appendChild(td);

  })
  
  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0.0;


  // criando uma td extra para a coluna volume
  const tdVolume = document.createElement('td');
  tdVolume.textContent = campos[1].value * campos[2].value;

  // colocando a td dentro da tr no DOM
  tr.appendChild(tdVolume);

  $tbody.appendChild(tr);
});
