
// JavaScript for email validation and form submission
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');

    if(!email) {
        errorMessage.textContent = 'Email is required!';
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(!emailRegex.test(email)) {
        errorMessage.textContent = 'Please enter a valid email!';
        return;
    }

    errorMessage.textContent = '';
    alert('Thank you for subscribing!');
});
