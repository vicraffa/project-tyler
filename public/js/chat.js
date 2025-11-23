    var dadosFeed;

    function limparFormulario() {
        document.getElementById("form_postagem").reset();
    }

    function publicar() {
        var usuario_id = sessionStorage.ID_USUARIO;

        var corpo = {
            mensagem: form_postagem.mensagem.value
        }

        fetch(`/chat/publicar/${usuario_id}`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(corpo)
        }).then(function (resposta) {

            // console.log("resposta: ", resposta);

            if (resposta.ok) {
                atualizarFeed()
                limparFormulario();
            } else if (resposta.status == 404) {
                window.alert("Deu 404!");
            } else {
                throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;

    }


    function atualizarFeed() {
        fetch(`/chat/listar`).then(function (resposta) {
            if (resposta.ok) {
                if (resposta.status == 204) {
                    var feed = document.getElementById("feed_container");
                    var mensagem = document.createElement("span");
                    mensagem.innerHTML = "Nenhum resultado encontrado."
                    feed.appendChild(mensagem);
                    throw "Nenhum resultado encontrado!!";
                }

                resposta.json().then(function (resposta) {
                    // console.log("Dados recebidos: ", JSON.stringify(resposta));
                    dadosFeed = resposta;

                    var feed = document.getElementById("feed_container");
                    feed.innerHTML = "";
                    for (let i = 0; i < resposta.length; i++) {
                        var publicacao = resposta[i];

                        // criando e manipulando elementos do HTML via JavaScript
                        var divPublicacao = document.createElement("div");
                        var spanNome = document.createElement("span");
                        var divmensagem = document.createElement("div");
                        var divButtons = document.createElement("div");
                        var btnDeletar = document.createElement("button");

                        spanNome.innerHTML = "<b>" + publicacao.nickname + "</b>";
                        divmensagem.innerHTML = publicacao.mensagem;

                        divPublicacao.className = "publicacao";
                        spanNome.className = "publicacao-nome";
                        divmensagem.className = "publicacao-mensagem";

                        divPublicacao.appendChild(spanNome);
                        divPublicacao.appendChild(divmensagem);
                        divPublicacao.appendChild(divButtons);
                        feed.appendChild(divPublicacao);
                    }

                    feed.scrollTop = feed.scrollHeight;
                });
            } else {
                throw ('Houve um erro na API!');
            }
        }).catch(function (resposta) {
            console.error(resposta);
        });

    
    }
