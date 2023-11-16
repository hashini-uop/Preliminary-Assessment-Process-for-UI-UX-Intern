function registerUser() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    
    if (password === confirmPassword) {
        alert('Registration successful!');
        window.location.href = 'login.html'; 
    } else {
        alert('Password and Confirm Password do not match. Please try again.');
    }
}
