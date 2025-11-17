document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  // Contoh validasi dasar
  if (username === 'alvi' && password === '112233') {
    message.style.color = 'green';
    message.textContent = 'Login berhasil!';
    // Redirect simulasi
    setTimeout(() => {
      alert('Selamat datang, alvi!');
    }, 1000);
  } else {
    message.style.color = 'red';
    message.textContent = 'Username atau password salah.';
  }
  {
    window.location.href = "index.html";
  }
});

// newui

