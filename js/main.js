var entrada = document.getElementById('email');


document.getElementById('botao2').addEventListener('click', function() {
    localStorage.email = entrada.value;
});