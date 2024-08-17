// Function to load chapter content
function loadChapter(chapterPath) {
    fetch(chapterPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('chapter-content').innerHTML = `<pre>${data}</pre>`;
        })
        .catch(error => {
            document.getElementById('chapter-content').innerHTML = 'Error loading chapter: ' + error;
        });
}

// Dark mode toggle functionality
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Toggle navbar color
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('navbar-light');
    navbar.classList.toggle('bg-light');
    navbar.classList.toggle('navbar-dark-mode');

    // Update all dropdown menus
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.classList.toggle('dropdown-menu-dark-mode');
    });

    // Update all dropdown items
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.toggle('dropdown-item-dark-mode');
    });

    // Update the button text
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
    } else {
        this.textContent = 'Dark Mode';
    }
});
