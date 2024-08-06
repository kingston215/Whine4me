document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
    } else {
        // Perform sign-in logic here
        errorMessage.textContent = '';
        alert('Sign in successful!');
        // You can redirect to another page or perform other actions here
    }
});
