questionario.style.display = "none";
resultados.style.display = "none";
inicio.style.display = "flex";

// variáveis globais
let numeroDaQuestaoAtual = 0;
let pontuacaoFinal = 0;
let tentativaIncorreta = 0;
let certas = 0;
let erradas = 0;
let quantidadeDeQuestoes;
let tabelaRanking = document.getElementById("tabela-dados");
let valor_tabela;
let audio = document.getElementById("musicaTentativa");
let listaMusica = [
  `<source src="assets/music/st. chroma.mp3" type="audio/mp3">`,
  `<source src="assets/music/new magic wand.mp3" type="audio/mp3">`,
  `<source src="assets/music/noid.mp3" type="audio/mp3">`,
  `<source src="assets/music/sorry not sorry.mp3" type="audio/mp3">`,
];
// let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

function iniciarQuiz() {
  resultados.style.display = "none";
  inicio.style.display = "none";
  questionario.style.display = "flex";

  document.getElementById("pontuacao").style.display = "flex";
  document.getElementById("jogo").style.display = "flex";
  document.getElementById("btnIniciarQuiz").style.display = "none";

  aleatorizarPerguntas()
  quantidadeDeQuestoes = listaDeQuestoes.length;
  document.getElementById("qtdQuestoes").innerHTML = quantidadeDeQuestoes;

  preencherHTMLcomQuestaoAtual(0);

  btnSubmeter.disabled = false;
  btnProx.disabled = true;

  let musicaDaVez = Math.floor(Math.random() * 4);

  audio.innerHTML = `${listaMusica[musicaDaVez]}`;
  audio.volume = 0.05;
}

function preencherHTMLcomQuestaoAtual(index) {
  habilitarAlternativas(true);
  const questaoAtual = listaDeQuestoes[index];
  numeroDaQuestaoAtual = index;
  document.getElementById("spanNumeroDaQuestaoAtual").innerHTML =
    Number(index) + 1; // ajustando porque o index começa em 0
  document.getElementById("spanQuestaoExibida").innerHTML =
    questaoAtual.pergunta;
  document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
  document.getElementById("labelOpcaoDois").innerHTML =
    questaoAtual.alternativaB;
  document.getElementById("labelOpcaoTres").innerHTML =
    questaoAtual.alternativaC;
  document.getElementById("labelOpcaoQuatro").innerHTML =
    questaoAtual.alternativaD;
}

function submeter() {
  const options = document.getElementsByName("option"); // recupera alternativas no html

  let hasChecked = false;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      hasChecked = true;
      break;
    }
  }

  if (!hasChecked) {
    alert("Não há alternativas escolhidas. Escolha uma opção.");
  } else {
    btnSubmeter.disabled = true;
    btnProx.disabled = false;

    habilitarAlternativas(false);

    checarResposta();
  }
}

function habilitarAlternativas(trueOrFalse) {
  let opcaoEscolhida = trueOrFalse ? false : true;

  primeiraOpcao.disabled = opcaoEscolhida;
  segundaOpcao.disabled = opcaoEscolhida;
  terceiraOpcao.disabled = opcaoEscolhida;
  quartaOpcao.disabled = opcaoEscolhida;
}

function avancar() {
  document.getElementById("primeiraOpcaoSpan").classList.remove("marcado");
  document.getElementById("segundaOpcaoSpan").classList.remove("marcado");
  document.getElementById("terceiraOpcaoSpan").classList.remove("marcado");
  document.getElementById("quartaOpcaoSpan").classList.remove("marcado");

  btnProx.disabled = true;
  btnSubmeter.disabled = false;

  desmarcarRadioButtons();

  if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
    preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual);
  } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
    preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual);
  } else {
    finalizarTentativa();
  }

  resultados.innerHTML = `
            <div class="card">
                <div id="pontuacaoFinalJogo">
                    <span id="pontuacaoFinal">PONTUAÇÃO FINAL:  <span style="color: black;" id="spanPontuacaoFinal">${
                      pontuacaoFinal * 7
                    }</span></span>
                </div>
                <div class="btns">
                    <button onclick="tentarNovamente()" class="buttonResultados">TENTAR NOVAMENTE</button>
                    <button onclick="finalizarJogo()" " class="buttonResultados">FINALIZAR</button>
                </div>
            </div>
            `;
}

function tentarNovamente() {
  pontuacaoFinal = 0;
  certas = 0;
  erradas = 0;
  iniciarQuiz();
}

function finalizarJogo() {
  window.location.reload();
}

function finalizarTentativa() {
  questionario.style.display = "none";
  resultados.style.display = "flex";

  registrarTentativa();
  audio.innerHTML = ``;
}

function checarResposta() {
  const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual]; // questão atual
  const respostaQuestaoAtual = questaoAtual.alternativaCorreta; // qual é a resposta correta da questão atual

  const options = document.getElementsByName("option"); // recupera alternativas no html

  let alternativaCorreta = null; // variável para armazenar a alternativa correta

  options.forEach((option) => {
    if (option.value === respostaQuestaoAtual) {
      alternativaCorreta = option.labels[0].id;
    }
  });

  // verifica se resposta assinalada é correta
  options.forEach((option) => {
    if (option.checked === true && option.value === respostaQuestaoAtual) {
      pontuacaoFinal++;
      certas++;
      numeroDaQuestaoAtual++;
    } else if (option.checked && option.value !== respostaQuestaoAtual) {
      const wrongLabelId = option.labels[0].id;
      tentativaIncorreta++;
      erradas++;
      numeroDaQuestaoAtual++;
    }
  });
}

function registrarTentativa() {
  var id = sessionStorage.getItem("ID_USUARIO");
  // Enviando o valor da nova input
  fetch("/questionario/tentativa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      idServer: id,
      certasServer: certas,
      erradasServer: erradas,
    }),
  })
    .then(function (resposta) {
      // console.log("resposta: ", resposta);
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}

function desmarcarRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}

function marcarOpcao(opcao) {
  document.getElementById("primeiraOpcaoSpan").classList.remove("marcado");
  document.getElementById("segundaOpcaoSpan").classList.remove("marcado");
  document.getElementById("terceiraOpcaoSpan").classList.remove("marcado");
  document.getElementById("quartaOpcaoSpan").classList.remove("marcado");
  document.getElementById(`${opcao}Span`).classList.add("marcado");
}

function obterDadosRanking() {
  fetch(`/questionario/ranking`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          valor_tabela = resposta;
          montarTabela();
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function montarTabela() {
  let tabela = document.getElementById("tabela-dados");

  for (let i = 0; i < valor_tabela.length; i++) {
    let posicao = i + 1;
    let nickname = valor_tabela[i].nickname;
    let pontuacao = valor_tabela[i].pontuacao * 7;

    tabela.innerHTML += `
            <tr>
                <td>${posicao}</td>
                <td>${nickname}</td>
                <td>${pontuacao}</td>
            </tr>`;
  }
}
obterDadosRanking();
