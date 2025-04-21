// Update your togglePassword function to this:
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
    // Focus back on the input after toggle
    passwordInput.focus();
}

console.log("JavaScript is connected!");
document.addEventListener('DOMContentLoaded', function() {
    alert("JavaScript is working!");
});