function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === 'yourUsername' && password === 'yourPassword') {
        alert('Login successful!');
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
