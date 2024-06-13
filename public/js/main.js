const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', function () {
    const mobileRegisterLink = document.getElementById('mobile-register-link');
    const mobileLoginLink = document.getElementById('mobile-login-link');
    const mobileLoginForm = document.getElementById('mobile-login-form');
    const mobileRegisterForm = document.getElementById('mobile-register-form');

    if (mobileRegisterLink && mobileLoginLink && mobileLoginForm && mobileRegisterForm) {
        mobileRegisterLink.addEventListener('click', function (e) {
            e.preventDefault();
            mobileLoginForm.style.display = 'none';
            mobileRegisterForm.style.display = 'flex';
            mobileRegisterForm.style.opacity = '0';
            setTimeout(() => {
                mobileRegisterForm.style.opacity = '1';
            }, 10);
        });

        mobileLoginLink.addEventListener('click', function (e) {
            e.preventDefault();
            mobileRegisterForm.style.display = 'none';
            mobileLoginForm.style.display = 'flex';
            mobileLoginForm.style.opacity = '0';
            setTimeout(() => {
                mobileLoginForm.style.opacity = '1';
            }, 10);
        });

        // Função para enviar o formulário de login
        mobileLoginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = mobileLoginForm.querySelector('input[type="email"]').value;
            const password = mobileLoginForm.querySelector('input[type="password"]').value;

            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        });

        // Função para enviar o formulário de cadastro
        mobileRegisterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = mobileRegisterForm.querySelector('input[type="text"]').value;
            const email = mobileRegisterForm.querySelector('input[type="email"]').value;
            const password = mobileRegisterForm.querySelector('input[type="password"]').value;

            fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        });
    }
});
