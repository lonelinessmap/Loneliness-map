
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('worldMap', {
        center: [0, 0],
        zoom: 1.5,
        worldCopyJump: false, // Prevent map from repeating
        dragging: true, // Disable dragging
        zoomControl: true, // Disable zoom control
        
    });
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    
    
    var countries = [
        { name: 'USA', lat: 37.7749, lon: -122.4194, area: 9833520 },
        { name: 'Canada', lat: 45.4215, lon: -75.6991, area: 9984670 },
        { name: 'Australia', lat: -35.3080, lon: 149.1246, area: 7692024 },
        { name: 'United Kingdom', lat: 51.509865, lon: -0.118092, area: 243610 },
        { name: 'Germany', lat: 51.1657, lon: 10.4515, area: 357022 },
        { name: 'Japan', lat: 36.2048, lon: 138.2529, area: 377975 },
        { name: 'Brazil', lat: -14.235, lon: -51.9253, area: 8515767 },
        { name: 'South Africa', lat: -30.5595, lon: 22.9375, area: 1221037 },
        { name: 'India', lat: 20.5937, lon: 78.9629, area: 3287263 },
        { name: 'China', lat: 35.8617, lon: 104.1954, area: 9596961 },
        { name: 'Russia', lat: 61.5240, lon: 105.3188, area: 17098242 },
        { name: 'Mexico', lat: 23.6345, lon: -102.5528, area: 1964375 },
        { name: 'Argentina', lat: -38.4161, lon: -63.6167, area: 2780400 },
        { name: 'Egypt', lat: 26.8206, lon: 30.8025, area: 1002450 },
        { name: 'Saudi Arabia', lat: 23.8859, lon: 45.0792, area: 2149690 },
        { name: 'Nigeria', lat: 9.0820, lon: 8.6753, area: 923768 },
        { name: 'Indonesia', lat: -0.7893, lon: 113.9213, area: 1904569 },
        { name: 'Qatar', lat: 25.276987, lon: 51.520008, area: 11586 },
        { name: 'Pakistan', lat: 30.3753, lon: 69.3451, area: 881912 },
        { name: 'Syria', lat: 35.8617, lon: 38.2815, area: 185180 },
        { name: 'Uzbekistan', lat: 41.3775, lon: 64.5853, area: 447400 },
        { name: 'Sweden', lat: 60.1282, lon: 18.6435, area: 450295 },
        { name: 'Norway', lat: 60.4720, lon: 8.4689, area: 323802 },
        { name: 'Finland', lat: 61.9241, lon: 25.7482, area: 338145 },
        { name: 'Denmark', lat: 56.2639, lon: 9.5018, area: 43094 },
        { name: 'Iceland', lat: 64.9631, lon: -19.0208, area: 103000 },
        { name: 'Greenland', lat: 71.7069, lon: -42.6043, area: 2166086 },
        { name: 'New Zealand', lat: -40.9006, lon: 174.8860, area: 268021 },
        { name: 'Chile', lat: -35.6751, lon: -71.5429, area: 756102 },
        { name: 'Colombia', lat: 4.5709, lon: -74.2973, area: 1141748 },
        { name: 'Peru', lat: -9.1899, lon: -75.0152, area: 1285216 },
        // Add the new countries here
        { name: 'Spain', lat: 40.4637, lon: -3.7492, area: 505992 },
        { name: 'Italy', lat: 41.8719, lon: 12.5674, area: 301340 },
        { name: 'France', lat: 46.6034, lon: 1.8883, area: 551695 },
        { name: 'Portugal', lat: 39.3999, lon: -8.2245, area: 92090 },
        { name: 'Netherlands', lat: 52.1326, lon: 5.2913, area: 41526 },
        { name: 'Belgium', lat: 50.5039, lon: 4.4699, area: 30528 },
        { name: 'Switzerland', lat: 46.8182, lon: 8.2275, area: 41284 },
        { name: 'Austria', lat: 47.5162, lon: 14.5501, area: 83871 },
        { name: 'Greece', lat: 39.0742, lon: 21.8243, area: 131957 },
        { name: 'Turkey', lat: 38.9637, lon: 35.2433, area: 783562 },
        { name: 'Iran', lat: 32.4279, lon: 53.6880, area: 1648195 },
        { name: 'Iraq', lat: 33.2232, lon: 43.6793, area: 438317 },
        { name: 'Jordan', lat: 30.5852, lon: 36.2384, area: 89342 },
        { name: 'Lebanon', lat: 33.8547, lon: 35.8623, area: 10452 },
        { name: 'Israel', lat: 31.0461, lon: 34.8516, area: 20770 },
        { name: 'Palestine', lat: 31.9522, lon: 35.2332, area: 6220 },
        { name: 'Kuwait', lat: 29.3759, lon: 47.9774, area: 17818 },
        { name: 'Oman', lat: 21.4735, lon: 55.9754, area: 309500 },
        { name: 'Yemen', lat: 15.5527, lon: 48.5164, area: 527968 },
        { name: 'United Arab Emirates', lat: 23.4241, lon: 53.8478, area: 83600 },
        { name: 'Afghanistan', lat: 33.9391, lon: 67.7100, area: 652230 },
        { name: 'Bangladesh', lat: 23.6850, lon: 90.3563, area: 147570 },
        { name: 'Bhutan', lat: 27.5142, lon: 90.4336, area: 38394 },
        { name: 'Maldives', lat: 3.2028, lon: 73.2207, area: 298 },
        { name: 'Nepal', lat: 28.3949, lon: 84.1240, area: 147516 },
        { name: 'Sri Lanka', lat: 7.8731, lon: 80.7718, area: 65610 },
        { name: 'Botswana', lat: -22.3285, lon: 24.6849, area: 581730 },
        { name: 'Kenya', lat: -1.2921, lon: 36.8219, area: 580367 },
        { name: 'Madagascar', lat: -18.7669, lon: 46.8691, area: 587041 },
        { name: 'Mauritius', lat: -20.3484, lon: 57.5522, area: 2040 },
        { name: 'Morocco', lat: 31.7917, lon: -7.0926, area: 446550 },
        { name: 'Tanzania', lat: -6.3690, lon: 34.8888, area: 947300 },
        { name: 'Algeria', lat: 28.0339, lon: 1.6596, area: 2381741 },
        { name: 'Angola', lat: -11.2027, lon: 17.8739, area: 1246700 },
        { name: 'Cameroon', lat: 7.3697, lon: 12.3547, area: 475442 },
        { name: 'Congo', lat: -4.0383, lon: 21.7587, area: 342000 },
        { name: 'Ethiopia', lat: 9.1450, lon: 40.4897, area: 1104300 },
        { name: 'Ghana', lat: 7.9528, lon: -1.0307, area: 238533 },
        { name: 'Ivory Coast', lat: 7.5400, lon: -5.5471, area: 322463 },
        { name: 'Libya', lat: 26.3351, lon: 17.2283, area: 1759540 },
        { name: 'Mali', lat: 17.5707, lon: -3.9962, area: 1248574 },
        { name: 'Mozambique', lat: -18.6657, lon: 35.5296, area: 801590 },
        { name: 'Namibia', lat: -22.9576, lon: 18.4904, area: 825418 },
        { name: 'Niger', lat: 17.6078, lon: 8.0817, area: 1267000 },
        { name: 'Rwanda', lat: -1.9403, lon: 29.8739, area: 26338 },
        { name: 'Senegal', lat: 14.4974, lon: -14.4524, area: 196722 },
        { name: 'Sierra Leone', lat: 8.4606, lon: -11.7799, area: 71740 },
        { name: 'Somalia', lat: 5.1521, lon: 46.1996, area: 637657 },
        { name: 'South Sudan', lat: 6.8769, lon: 31.3069, area: 619745 },
        { name: 'Sudan', lat: 12.8628, lon: 30.2176, area: 1861484 },
        { name: 'Tunisia', lat: 33.8869, lon: 9.5375, area: 163610 },
        { name: 'Uganda', lat: 1.3733, lon: 32.2903, area: 241551 },
        { name: 'Zambia', lat: -13.1339, lon: 27.8493, area: 752612 },
        { name: 'Zimbabwe', lat: -19.0154, lon: 29.1549, area: 390757 }
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
                "Peru": "PE",
                "Spain": "ES",
                "Italy": "IT",
                "France": "FR",
                "Portugal": "PT",
                "Netherlands": "NL",
                "Belgium": "BE",
                "Switzerland": "CH",
                "Austria": "AT",
                "Greece": "GR",
                "Turkey": "TR",
                "Iran": "IR",
                "Iraq": "IQ",
                "Jordan": "JO",
                "Lebanon": "LB",
                "Israel": "IL",
                "Palestine": "PS",
                "Kuwait": "KW",
                "Oman": "OM",
                "Yemen": "YE",
                "United Arab Emirates": "AE",
                "Afghanistan": "AF",
                "Bangladesh": "BD",
                "Bhutan": "BT",
                "Maldives": "MV",
                "Nepal": "NP",
                "Sri Lanka": "LK",
                "Botswana": "BW",
                "Kenya": "KE",
                "Madagascar": "MG",
                "Mauritius": "MU",
                "Morocco": "MA",
                "Tanzania": "TZ",
                "Algeria": "DZ",
                "Angola": "AO",
                "Cameroon": "CM",
                "Congo": "CG",
                "Ethiopia": "ET",
                "Ghana": "GH",
                "Ivory Coast": "CI",
                "Libya": "LY",
                "Mali": "ML",
                "Mozambique": "MZ",
                "Namibia": "NA",
                "Niger": "NE",
                "Rwanda": "RW",
                "Senegal": "SN",
                "Sierra Leone": "SL",
                "Somalia": "SO",
                "South Sudan": "SS",
                "Sudan": "SD",
                "Tunisia": "TN",
                "Uganda": "UG",
                "Zambia": "ZM",
                "Zimbabwe": "ZW"
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

    // Function to generate a random color in hex format
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    countries.forEach(function (country) {
        var radius = Math.sqrt(country.area) * 200;
        var circle = L.circle([country.lat, country.lon], {
            color: getRandomColor(), // outline color
            fillColor: '#f03', // fill color
            fillOpacity: 0.5, // fill opacity
            radius: radius // radius of the circle in meters
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
