var entrada = document.getElementById('email');
localStorage.setItem('emails',JSON.stringify(['']));

document.getElementById('botao2').addEventListener('click', function() {
    const emails = JSON.parse(localStorage.getItem('emails'));
    console.log('emails', emails)
    emails.push(entrada.value);
    localStorage.setItem('emails',JSON.stringify(emails));
});