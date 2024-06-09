function displayAboutContent() {
    worldMap.style.display = "none";
    

    const aboutContent = `
        <div class="about-content">
            <h2>About Loneliness Map</h2>
            <img src="https://neurosciencenews.com/files/2023/06/loneliness-brain-processing-neurosicence-1155x770.jpg" alt="Loneliness Image" class="about-image">
            <p class="image-source">Image Source: <a href="https://neurosciencenews.com/files/2023/06/loneliness-brain-processing-neurosicence-1155x770.jpg" target="_blank">Neuroscience News</a></p>
            
            <p>Loneliness is a complex and usually unpleasant emotional response to isolation. It includes anxious feelings about a lack of connection or communication with other beings, both in the present and extending into the future. As such, loneliness can be felt even when surrounded by other people. The causes of loneliness are varied and include social, mental, emotional, and physical factors.</p>
            <p>Our project, the Loneliness Map, aims to provide insights into the prevalence and impact of loneliness across different regions. By analyzing various data sources and presenting them in an accessible way, we hope to contribute to better understanding and addressing this widespread issue. Our team is dedicated to researching and mitigating the effects of loneliness on individuals and society as a whole.</p>
        </div>
    `;

    contentDiv.innerHTML = aboutContent;
}
