let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do amigo secreto');
exibirTextoNaTela('h2', 'digite o nome dos seus amigos');

function adicionarAmigo() {
  const input = document.querySelector('input');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Digite um nome!');
    return;
  }

  amigos.push(nome);
  input.value = '';
  mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach(function(amigo) {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function gerarNomeAleatorio() {
  const indice = Math.floor(Math.random() * amigos.length);
  return amigos[indice];
}

function mostrarNome() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome!');
    return;
  }
  const nome = gerarNomeAleatorio();
  document.getElementById('resultado').innerText = 'Amigo sorteado: ' + nome;
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  const resultado = document.getElementById('resultado');
  resultado.innerText = `O amigo secreto sorteado é: ${sorteado}`;
  resultado.style.color = 'green';
}