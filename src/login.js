document.getElementById('formLogin').addEventListener('submit', async function () {
    event.preventDefault();

    const user = document.getElementById('user').value;
    const pass = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5500/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, password })
        });

        const data = await response.json();

        if (data.ok) {
            document.getElementById('message').innerText = data.message;
        } else {
            document.getElementById('message').innerText = data.message;
        }
    } catch (error) {
        console.log('Error:', error);
        document.getElementById('message').innerText = 'Error en el servidor';
    }
})