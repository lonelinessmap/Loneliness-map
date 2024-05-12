
document.addEventListener('DOMContentLoaded', function() {
    //fetchNewsALL();


display()
                        .then(data => updateContentall(data))
                        .catch(error => {
                            console.error('Error fetching research articles:', error);
                            content.innerHTML = `Error fetching research articles! Try again after 5 secs!: ${error.message}`;
                        });
});
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
                        
function display() {
                            return new Promise((resolve, reject) => {
                                //const apiKey = 'a06dcf890cc04ed097b65b1c57b231e2';// News
                                const apiKey = '5a523b663ab5f12c668be33473595e18'; // Gnews
                                const baseKeyword = 'loneliness';
                                const synonyms = ['solitude', 'isolation', 'depression', 'alone'];
                                //const countryKeyword = countryName ? `${countryName} ${baseKeyword}` : baseKeyword;
                                const keywordQuery = `${baseKeyword} OR ${synonyms.join(' OR ')}`;
                                
                                // const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(countryKeyword)}&apiKey=${apiKey}`;
                                // const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(countryKeyword)}&qInTitle=${encodeURIComponent(keywordQuery)}&apiKey=${apiKey}`;
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
                                        <p class="indented-paragraph">Published: ${article.publishedAt || 'Source not available'}</p>
                                        <a href="${article.url}" target="_blank">Read more</a>
                                    </div>
                                `;
                            });
            
                            resolve(articles);
                        })
                        .catch(error => reject(error));
                        });
                        }






