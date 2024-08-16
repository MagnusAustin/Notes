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
    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('navbar-light');
    navbar.classList.toggle('bg-light');
    navbar.classList.toggle('navbar-dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
    } else {
        this.textContent = 'Dark Mode';
    }
});
