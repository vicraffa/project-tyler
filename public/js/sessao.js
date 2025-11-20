// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NICK_USUARIO;

    var b_usuario = document.getElementById("lnick_usuario");

    if (email != null && nome != null) {
        lnick_usuario.innerHTML = nome;
    } else {
        window.location = "../sessao.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "sessao.html";
}