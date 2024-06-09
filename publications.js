function displayPublicationsContent() {
    worldMap.style.display = "none";
    homeButton.style.display = "block";
    
    const publications = [
        {
            title: "Study on Loneliness",
            authors: "Hurmat, Atiq, Mowafa",
            journal: "Journal XYZ",
            year: 2024,
            link: "https://example.com/publication1"
        },
        {
            title: "Study on Loneliness",
            authors: "Hurmat, Atiq, Mowafa",
            Conference: "Conference XYZ",
            year: 2024,
            link: "https://example.com/publication1"
        }
    ];

    const publicationsHtml = publications.map(pub => `
        <div class="publication">
            <h3>${pub.title}</h3>
            <p><strong>Authors:</strong> ${pub.authors}</p>
            <p><strong>Journal:</strong> ${pub.journal}</p>
            <p><strong>Year:</strong> ${pub.year}</p>
            <a href="${pub.link}" target="_blank">Read more</a>
        </div>
    `).join('');

    contentDiv.innerHTML = `<h2>Publications</h2>${publicationsHtml}`;
}
