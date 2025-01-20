const amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nomeAmigo);

    const listaAmigos = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nomeAmigo;
    listaAmigos.appendChild(li);

    inputAmigo.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    const sorteio = {};
    const amigosDisponiveis = [...amigos];

    amigos.forEach(amigo => {
        let indiceSorteado;

        do {
            indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
        } while (amigosDisponiveis[indiceSorteado] === amigo);

        sorteio[amigo] = amigosDisponiveis[indiceSorteado];
        amigosDisponiveis.splice(indiceSorteado, 1);
    });

    exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (const [amigo, sorteado] of Object.entries(sorteio)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} tirou ${sorteado}`;
        resultado.appendChild(li);
    }
}