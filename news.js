function displayNews(homeButton) {
    worldMap.style.display = "none";
    
    contentDiv.innerHTML = '<h2>Latest News</h2><ul id="newsList"></ul>';
    fetchNews()
        .then(data => updateContentall(data))
        .catch(error => {
            console.error('Error fetching news articles:', error);
            contentDiv.innerHTML = `Error fetching news articles! Try again after 5 secs!: ${error.message}`;
        });
}

function fetchNews() {
    return new Promise((resolve, reject) => {
        const apiKey = '5a523b663ab5f12c668be33473595e18'; // Gnews API key
        const baseKeyword = 'loneliness';
        const synonyms = ['solitude', 'isolation', 'depression', 'alone'];
        const keywordQuery = `${baseKeyword} OR ${synonyms.join(' OR ')}`;
        const apiUrl = `https://gnews.io/api/v4/search?q=${encodeURIComponent(baseKeyword)}&qInTitle=${encodeURIComponent(keywordQuery)}&token=${apiKey}`;
        
        fetch(apiUrl, { mode: 'cors' })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('API Response:', data);
                const articles = data.articles.map(article => {
                    const content = `${article.title}. ${article.description}. ${article.content}`.toLowerCase();
                    return `
                        <div class="news-article">
                            <h3>${article.title || 'Title not available'}</h3>
                            <img src="${article.image || 'Image not available'}" alt="Article Image" style="max-width: 100%; height: auto;">
                            <p class="justified-paragraph">${article.description || 'Description not available'}</p>
                            <p class="indented-paragraph">Source: ${article.source.name || 'Source not available'}</p>
                            <p class="indented-paragraph">Published: ${article.publishedAt || 'Date not available'}</p>
                            <a href="${article.url}" target="_blank">Read more</a>
                        </div>
                    `;
                });
                resolve(articles);
            })
            .catch(error => reject(error));
    });
}

function updateContentall(data) {
    var content = document.getElementById('newsList');
    content.innerHTML = '';
    if (data && data.length > 0) {
        data.forEach(item => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = item;
            content.appendChild(resultElement);
        });
    } else {
        content.innerHTML = 'No results found.';
    }
}
