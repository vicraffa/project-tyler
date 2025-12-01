lnick_usuario.innerHTML = sessionStorage.NICK_USUARIO;
lemail_usuario.innerHTML = sessionStorage.EMAIL_USUARIO;

var usuario_id = sessionStorage.ID_USUARIO;
var valor_kpi;
var valor_grafico;

function obterDadosKpi() {
  fetch(`/perfil/kpi/${usuario_id}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          resposta.reverse();

          valor_kpi = resposta[0];

          montarKPIS();
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function montarKPIS() {
  document.getElementById("kpi_total_tentativa").innerHTML =
    valor_kpi.quantidadeTentativas;
  document.getElementById("kpi_melhor_pontuacao").innerHTML =
    valor_kpi.melhorPontuacao;
  document.getElementById("kpi_pontuacao_media").innerHTML = (
    (valor_kpi.quantidadeAcertos * 7) /
    valor_kpi.quantidadeTentativas
  ).toFixed(0);
  document.getElementById("kpi_taxa_acerto").innerHTML = `${
    Number(valor_kpi.taxaAcerto) * 100
  }%`;
}

function obterDadosGrafico() {
  fetch(`/perfil/grafico/${usuario_id}`, { cache: "no-store" })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (resposta) {
          resposta.reverse();

          valor_grafico = resposta;
          montarGrafico(resposta);
        });
      } else {
        console.error("Nenhum dado encontrado ou erro na API");
      }
    })
    .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
    });
}

function montarGrafico(resposta) {
  // Criando estrutura para plotar gráfico - labels
  let labels = [];

  // Criando estrutura para plotar gráfico - dados
  let dados = {
    labels: labels,
    datasets: [
      {
        label: "Pontuação",
        data: [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: [
          "#d86e89",
          "#b54f6b",
          "#93304e",
          "#720a34",
          "#51001b",
        ],
        tension: 0.1,
      },
    ],
  };

  // Inserindo valores recebidos em estrutura para plotar o gráfico
  for (i = 0; i < resposta.length; i++) {
    var registro = resposta[i];

    var pontuacao = registro.acertos * 7;
    var dataRegistro = registro.dtRegistro.slice(0, 10);

    labels.push(dataRegistro);
    dados.datasets[0].data.push(pontuacao);
  }

  // Criando estrutura para plotar gráfico - config
  const config = {
    type: "bar",
    data: dados,
    options: {
      plugins: {
        legend: {
          labels: {
            font: {
              size: "20px",
              family: "Helvetica",
              weight: "bold",
            },
          },
        },
      },
    },
  };

  // Adicionando gráfico criado em div na tela
  let myChart = new Chart(document.getElementById(`myChart`), config);
}

function obterDados() {
  obterDadosGrafico();
  obterDadosKpi();
}

window.onload = obterDados();
