//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
} 


//Validação de Login
function login(){
    //var logado - vai iniciar com o valor zero
    var logado = 0;
    //var usuario - vai pegar o valor do elemento com o nome usuario
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    //var senha - vai pegar o valor do elemento com id senha
    var senha = document.getElementById('senha').value;
    //o metodo .toLowerCase transforma os caracteres em minusculas
    senha = senha.toLowerCase();
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if(logado == 0){
        alert("Acesso negado. Dados incorretos.");
    }
}


//Ativar alert no botão cadastrar
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}
