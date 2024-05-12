
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('worldMap', {
        center: [0, 0],
        zoom: 1.5,
        worldCopyJump: false, // Prevent map from repeating
        dragging: false, // Disable dragging
        zoomControl: false, // Disable zoom control
        
    });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    
    
    var countries = [
        { name: 'USA', lat: 37.7749, lon: -122.4194 },
        { name: 'Canada', lat: 45.4215, lon: -75.6991 },
        { name: 'Australia', lat: -35.3080, lon: 149.1246 },
        { name: 'United Kingdom', lat: 51.509865, lon: -0.118092 },
        { name: 'Germany', lat: 51.1657, lon: 10.4515 },
        { name: 'Japan', lat: 36.2048, lon: 138.2529 },
        { name: 'Brazil', lat: -14.235, lon: -51.9253 },
        { name: 'South Africa', lat: -30.5595, lon: 22.9375 },
        { name: 'India', lat: 20.5937, lon: 78.9629 },
        { name: 'China', lat: 35.8617, lon: 104.1954 },
        { name: 'Russia', lat: 61.5240, lon: 105.3188 },
        { name: 'Mexico', lat: 23.6345, lon: -102.5528 },
        { name: 'Argentina', lat: -38.4161, lon: -63.6167 },
        { name: 'Egypt', lat: 26.8206, lon: 30.8025 },
        { name: 'Saudi Arabia', lat: 23.8859, lon: 45.0792 },
        { name: 'Nigeria', lat: 9.0820, lon: 8.6753 },
        { name: 'Indonesia', lat: -0.7893, lon: 113.9213 },
        { name: 'Qatar', lat: 25.276987, lon: 51.520008 },
        { name: 'Pakistan', lat: 30.3753, lon: 69.3451 },
        { name: 'Syria', lat: 35.8617, lon: 38.2815 },
        { name: 'Uzbekistan', lat: 41.3775, lon: 64.5853 },
        { name: 'Sweden', lat: 60.1282, lon: 18.6435 },
        { name: 'Norway', lat: 60.4720, lon: 8.4689 },
        { name: 'Finland', lat: 61.9241, lon: 25.7482 },
        { name: 'Denmark', lat: 56.2639, lon: 9.5018 },
        { name: 'Iceland', lat: 64.9631, lon: -19.0208 },
        { name: 'Greenland', lat: 71.7069, lon: -42.6043 },
        { name: 'New Zealand', lat: -40.9006, lon: 174.8860 },
        { name: 'Chile', lat: -35.6751, lon: -71.5429 },
        { name: 'Colombia', lat: 4.5709, lon: -74.2973 },
        { name: 'Peru', lat: -9.1899, lon: -75.0152 }
    ];
    

    var infoWindow; // Declare infoWindow globally

    function displayCountryInfo(countryName) {
        console.log('Displaying info for:', countryName);

        var country = countries.find(c => c.name.toLowerCase() === countryName.toLowerCase());
        if (country) {
            console.log('Country found:', country);

            infoWindow = window.open('', '_blank', 'width=700,height=400');
            infoWindow.document.write(`
            <html>
            <head>
                
                <link rel="stylesheet" type="text/css" href="styles.css">
            </head>
            <body>
            <h2>Country Information for ${countryName}</h2>
        
            <div id="tabs">
            
            <button id="News" class="info-btn" onclick="showInfo('News','${countryName}')">News</button>
            <button id="Research" class="info-btn" onclick="showInfo('Research','${countryName}')">Research</button>
            <button id="Social" class="info-btn" onclick="showInfo('Social','${countryName}')">Social</button>
            <button id="Influencers" class="info-btn" onclick="showInfo('Influencers','${countryName}')">Influencers</button>
            <button id="Google Trend" class="info-btn" onclick="showInfo('Google Trend','${countryName}')">Google Trend</button>
            
            </div>
            <div id="tabContent"></div>
            </body>
            </html>
            `);

            showInfo('Statistics', countryName);
            
            
          
            

            function showInfo(tab, countryName) {
                
                

                var content = infoWindow.document.getElementById('tabContent');

                // Set initial content to 'Loading...'
                content.innerHTML = 'Loading...';

                if (tab === 'Statistics') {
                    axios.get(`https://restcountries.com/v2/name/${encodeURIComponent(countryName)}`)
                        .then(response => response.data)
                        .then(data => {
                            if (data && data.length > 0) {
                                const countryInfo = data[0];
                                content.innerHTML = `
                                


                            <div class="country-card">
                            <div class="card-content">
                            <div class="info-item">
                                <span class="label">Population:</span>
                                <span class="value">${countryInfo.population}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Area:</span>
                                <span class="value">${countryInfo.area} square kilometers</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Capital:</span>
                                <span class="value">${countryInfo.capital}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Region:</span>
                                <span class="value">${countryInfo.region}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Subregion:</span>
                                <span class="value">${countryInfo.subregion}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Population Density:</span>
                                <span class="value">${(countryInfo.population / countryInfo.area).toFixed(2)} people/sq km</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Demonym:</span>
                                <span class="value">${countryInfo.demonym}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Borders:</span>
                                <span class="value">${countryInfo.borders}</span>
                            </div>
                            <div class="info-item">
                                <span class="label">Time Zones:</span>
                                <span class="value">${countryInfo.timezones}</span>
                            </div>
                            </div>
                            </div>

                        `;
                            } else {
                                content.innerHTML = 'No data found.';
                            }
                        })
                        .catch(error => {
                            console.error('Error fetching country data:', error);
                            content.innerHTML = `Error fetching country data: ${error.message}`;
                        });
                }
                else if (tab === 'Google Trend') {
                    
                        displayGoogleTrendsTab(countryName)
                            .then(iframe => {
                                // Update content with Google Trends iframe
                                content.innerHTML = iframe;
                            })
                            .catch(error => {
                                console.error('Error displaying Google Trends:', error);
                                content.innerHTML = `Error displaying Google Trends: ${error.message}`;
                            });
                    }
                    
                    

                    else if (tab === 'Social') {
                        // Fetch influencers data and update content
                        displaySocialTab(countryName)
                        .then(data => updateContent(data))
                            .catch(error => {
                                console.error('Error fetching Social Content:', error);
                                content.innerHTML = `Error fetching Social Content! Try again after 5 secs!: ${error.message}`;
                            });
                    }       
                    
                else if (tab === 'Influencers') {
                    // Fetch influencers data and update content
                    displayInfluencersTab(countryName)
                    .then(data => updateContent(data))
                        .catch(error => {
                            console.error('Error fetching influencers:', error);
                            content.innerHTML = `Error fetching influencers! Try again after 5 secs!: ${error.message}`;
                        });
                }
                else if (tab === 'News') {
                    // Fetch news data and update content
                    displayNewsTab(countryName)
                        .then(data => updateContent(data))
                        .catch(error => {
                            console.error('Error fetching news:', error);
                            content.innerHTML = `Error fetching news! Try again after 5 secs!: ${error.message}`;
                        });
                } else if (tab === 'Research') {
                    // Fetch research data and update content
                    displayResearchTab(countryName)
                        .then(data => updateContent(data))
                        .catch(error => {
                            console.error('Error fetching research articles:', error);
                            content.innerHTML = `Error fetching research articles! Try again after 5 secs!: ${error.message}`;
                        });
                }
            }

            function updateContent(data) {
                var content = infoWindow.document.getElementById('tabContent');
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
            
            const countryCodes = {
                "USA": "US",
                "Canada": "CA",
                "Australia": "AU",
                "United Kingdom": "GB",
                "Germany": "DE",
                "Japan": "JP",
                "Brazil": "BR",
                "South Africa": "ZA",
                "India": "IN",
                "China": "CN",
                "Russia": "RU",
                "Mexico": "MX",
                "Argentina": "AR",
                "Egypt": "EG",
                "Saudi Arabia": "SA",
                "Nigeria": "NG",
                "Indonesia": "ID",
                "Qatar": "QA",
                "Pakistan": "PK",
                "Syria": "SY",
                "Uzbekistan": "UZ",
                "Sweden": "SE",
                "Norway": "NO",
                "Finland": "FI",
                "Denmark": "DK",
                "Iceland": "IS",
                "Greenland": "GL",
                "New Zealand": "NZ",
                "Chile": "CL",
                "Colombia": "CO",
                "Peru": "PE"
            };
            
            function displayGoogleTrendsTab(countryName) {
                const content = infoWindow.document.getElementById('tabContent');
                const countryCode = countryCodes[countryName];
                if (countryCode) {
                    const googleTrendsUrl = `https://trends.google.com/trends/explore?geo=${countryCode}&q=loneliness&hl=en-US`;
                    content.innerHTML = `<a href="${googleTrendsUrl}">Google Trends: Loneliness ${countryName}</a>`;
                } else {
                    content.innerHTML = `Country code not found for ${countryName}`;
                }
            }
            
            
            

            function displayNewsTab(countryName) {
                return new Promise((resolve, reject) => {
                    //const apiKey = 'a06dcf890cc04ed097b65b1c57b231e2';// News
                    const apiKey = '5a523b663ab5f12c668be33473595e18'; // Gnews
                    const baseKeyword = 'loneliness';
                    const synonyms = ['solitude', 'isolation', 'depression', 'alone'];
                    const countryKeyword = countryName ? `${countryName} ${baseKeyword}` : baseKeyword;
                    const keywordQuery = `${baseKeyword} OR ${synonyms.join(' OR ')}`;
                
                    // const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(countryKeyword)}&apiKey=${apiKey}`;
                    // const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(countryKeyword)}&qInTitle=${encodeURIComponent(keywordQuery)}&apiKey=${apiKey}`;
                    const apiUrl = `https://gnews.io/api/v4/search?q=${encodeURIComponent(countryKeyword)}&qInTitle=${encodeURIComponent(keywordQuery)}&token=${apiKey}`;
                    
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
            
            
            function displayResearchTab(countryName) {
                return new Promise((resolve, reject) => {
                    const baseKeyword = 'loneliness';
                    const countryKeyword = countryName ? `${countryName} ${baseKeyword}` : baseKeyword;
                    const apiUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(countryKeyword)}&retmode=json`;
            
                    fetch(apiUrl, { method: "GET", mode: 'cors' })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Failed to fetch research articles: ${response.status} ${response.statusText}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            const articleIds = data.esearchresult.idlist;
            
                            // Fetch detailed information for each article
                            const articlePromises = articleIds.map(articleId => {
                                const articleUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${articleId}&retmode=xml`;
                                return fetch(articleUrl, { method: "GET", mode: 'cors' })
                                    .then(response => response.text())
                                    .then(xmlData => {
                                        const parser = new DOMParser();
                                        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
            
                                        const title = xmlDoc.getElementsByTagName("ArticleTitle")[0].textContent;
                                        const venue = xmlDoc.getElementsByTagName("ISOAbbreviation")[0].textContent;
                                        const authors = Array.from(xmlDoc.getElementsByTagName("Author")).map(author => {
                                            const lastName = author.getElementsByTagName("LastName")[0].textContent;
                                            const foreName = author.getElementsByTagName("ForeName")[0].textContent;
                                            return `${foreName} ${lastName}`;
                                        });
                                        const abstract = xmlDoc.getElementsByTagName("AbstractText")[0].textContent;
                                        const url = `https://pubmed.ncbi.nlm.nih.gov/${articleId}/`;
            
                                        return { title, venue, authors, abstract, url };
                                    })
                                    .catch(error => {
                                        console.error(`Failed to fetch article ${articleId}: ${error}`);
                                        return null;
                                    });
                            });
            
                            // Resolve with the list of article details
                            Promise.all(articlePromises)
                                .then(articles => {
                                    const researchArticles = articles.map(article => {
                                        if (!article) return ""; // Skip failed fetches
                                        return `
                                            <div class="research-article">
                                                <h3>${article.title}</h3>
                                                <p class="indented-paragraph">Published in ${article.venue || 'Unknown Source'}</p>
                                                <p>Authors: ${article.authors.join(', ')}</p>
                                                ${article.abstract ? `<p class="justified-paragraph">Abstract: ${article.abstract}</p>` : ''}
                                                ${article.url ? `<a href="${article.url}" target="_blank">Read more</a>` : ''}
                                            </div>
                                        `;
                                    });
                                    resolve(researchArticles.filter(Boolean)); // Filter out empty articles
                                })
                                .catch(error => reject(error));
                        })
                        .catch(error => reject(error));
                });
            }
            
            
           
            
            
            
            


            function displaySocialTab(countryName) {

                    const content = infoWindow.document.getElementById('tabContent');
                    const baseKeyword = 'loneliness';
                    const countryKeyword = countryName ? `${countryName} ${baseKeyword}` : baseKeyword;
                    const redditUrl = `https://www.reddit.com/search?q=${encodeURIComponent(countryKeyword)}&sort=new`;
                    const twitterUrl = `https://www.twitter.com/search?q=${encodeURIComponent(countryKeyword)}&f=live`;
                    content.innerHTML = `
                    <div><a href="${redditUrl}">See how Reddit talks about Loneliness in ${countryName}</a></div>
                    <div><a href="${twitterUrl}">See how Twitter talks about Loneliness in ${countryName}</a></div>
                    `;

            }
            

            function displayInfluencersTab(countryName) {
                const apiUrl = 'https://influencer-search.p.rapidapi.com/api/v1/influencer/search';
                const apiKey = '990239b5d9msh616b61bf8ff39e0p11f1f5jsnb7c2738d9ac2';
                const baseKeyword = 'loneliness';
                const synonyms = ['solitude', 'isolation', 'depression', 'alone'];
                const keywordQuery = `${baseKeyword} OR ${synonyms.join(' OR ')}`;
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-RapidAPI-Key': apiKey,
                        'X-RapidAPI-Host': 'influencer-search.p.rapidapi.com'
                    },
                    body: JSON.stringify({
                        query: {
                            keyword: baseKeyword
                        }
                    })
                };
            
                return fetch(apiUrl, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Failed to fetch influencers: ${response.status} ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(result => {
                        // Filter influencers based on countryName if available
                        
                        return result.data.slice(0, 20); // Limit to maximum 20 profiles
                    })
                    .then(data => {
                        // Customize the data processing logic based on the influencer response structure
                        const influencers = data.map(influencer => `
                            <div class="influencer-profile">
                                <h3>${influencer.name}</h3>
                                <p>Screen Name: ${influencer.screen_name}</p>
                                <p>Description: ${influencer.description}</p>
                                <p>Followers: ${influencer.followers_count}</p>
                                <p>Favourites: ${influencer.favourites_count}</p>
                                <p>Friends: ${influencer.friends_count}</p>
                                <p>Location(s): ${influencer.location}</p>
                            </div>
                        `);
                        return influencers;
                    })
                    .catch(error => {
                        console.error(error);
                        throw new Error(`Error fetching influencers: ${error.message}`);
                    });
            }
            

            

            infoWindow.showInfo = showInfo; // Expose the function to the child window
        } else {
            console.log('Country not found!');
            infoWindow = window.open('', '_blank', 'width=200,height=100');
            infoWindow.document.write('<p>No data found for this country</p>');
        }
    }

    countries.forEach(function (country) {
        var circle = L.circle([country.lat, country.lon], {
            color: 'red', // outline color
            fillColor: '#f03', // fill color
            fillOpacity: 0.5, // fill opacity
            radius: 250000 // radius of the circle in meters
        }).addTo(map);
    
        circle.on('click', function (e) {
            displayCountryInfo(country.name);
        });
    });
    

    // Search functionality
    document.getElementById('searchInput').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            var searchValue = this.value;
            displayCountryInfo(searchValue);
        }
    });

    
});


