document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('user-list');

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));

        if (user && user.username && user.email && user.password) {
            const li = document.createElement('li');
            li.textContent = `Usuario: ${user.username}, Email: ${user.email}`;
            userList.appendChild(li);
        }
    }

    if (localStorage.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No hay usuarios registrados.';
        userList.appendChild(li);
    }
});
