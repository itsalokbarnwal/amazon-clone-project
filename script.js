// Show/hide dropdown menu
const menuToggle = document.querySelector('.panel-all');
const panelOption = document.querySelector('.panel-option');

menuToggle.addEventListener('click', () => {
    panelOption.classList.toggle('show');
});

// Interactive search bar
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`);
        // Here you could redirect to a search page, etc.
    }
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.foot-panel1');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
