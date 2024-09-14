// Output the current year in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Output the date the document was last modified in the footer's second paragraph
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const userInput = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
            event.preventDefault();
            alert('Please fill in both the username and passwords fields');
        }
    });
});