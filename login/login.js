const campoSenha = document.getElementById("senha")
const btnSenha = document.querySelector("#mostrar-senha")

console.log(btnSenha.type)

btnSenha.addEventListener("click", function () {
    campoSenha.type = campoSenha.type == "password" ? "texto" : "password";
})
