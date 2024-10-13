const form = document.getElementById('sign-up-form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault(); // Previne o envio do formulário
        errorMessage.style.display = 'block'; // Mostra a mensagem de erro
    } else {
        errorMessage.style.display = 'none'; // Esconde a mensagem de erro
    }
});