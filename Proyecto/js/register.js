document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('new-username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('new-password').value;

    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // Reiniciar mensajes de error
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validación de nombre de usuario
    if (!validateUsername(username)) {
        usernameError.textContent = 'Nombre de usuario no válido. Debe tener entre 8 y 15 caracteres, comenzar con una letra, y no contener espacios ni caracteres especiales.';
        return;
    }

    // Validación de contraseña
    if (!validatePassword(password)) {
        passwordError.textContent = 'Contraseña no válida. Debe tener entre 12 y 20 caracteres, incluir al menos una letra en mayúsculas, una letra en minúsculas, un número y un carácter especial.';
        return;
    }

    // Si todo es válido, guardar el usuario en localStorage
    const user = { username, email, password };
    localStorage.setItem(username, JSON.stringify(user));

    alert('Usuario registrado con éxito');
    window.location.href = 'index.html'; // Redirigir al login
});

function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{7,14}$/;
    return usernameRegex.test(username);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,20}$/;
    return passwordRegex.test(password);
}

