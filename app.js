// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo'); // id do input no HTML
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  if (amigos.includes(nome)) {
    alert('Este nome já foi adicionado.');
    return;
  }

  amigos.push(nome);
  input.value = ''; // limpa o campo de entrada
  atualizarLista();
}

// Função para atualizar a lista visível na página
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // limpa a lista para evitar duplicados

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função para sortear um amigo da lista
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Nenhum amigo cadastrado para sortear.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indiceSorteado];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${nomeSorteado}</strong></li>`;
}

