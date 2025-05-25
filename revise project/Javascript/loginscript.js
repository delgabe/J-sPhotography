function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggle = document.querySelector('.toggle-password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggle.textContent = 'Hide Password';
  } else {
    passwordInput.type = 'password';
    toggle.textContent = 'Show Password';
  }
}


