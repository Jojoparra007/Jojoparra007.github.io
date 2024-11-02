// JavaScript source code
// Show the "Back to Top" button when scrolling down
window.onscroll = function () {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block"; // Show button
    } else {
        backToTopButton.style.display = "none"; // Hide button
    }
};

// Function to scroll back to the top smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

