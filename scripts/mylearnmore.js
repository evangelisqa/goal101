// Output the current year in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Output the date the document was last modified in the footer's second paragraph
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

document.addEventListener('DOMContentLoaded', function () {
    const customCardsSection = document.getElementById('custom-cards');
    const moreInfoButton = document.createElement('button');
    moreInfoButton.textContent = 'Learn More About Custom Cards';

    customCardsSection.appendChild(moreInfoButton);

    moreInfoButton.addEventListener('click', function () {
        alert('Our customd cards are designed to meet your specific needs. Contact us for more detail!');
    });
});