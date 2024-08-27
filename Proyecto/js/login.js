document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
        alert('Inicio de sesión exitoso');
        // Aquí redirigirías a la página principal
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
