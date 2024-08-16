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
