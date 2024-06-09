function displayTeamContent() {
    worldMap.style.display = "none";
    homeButton.style.display = "block";
    
    const teamMembers = [
        {
            name: "Mowafa",
            title: "Professor",
            bio: "he is currently a professor at HBKU",
            photo: "Image/mowafa.jpg"
        },
        {
            name: "Hurmat",
            title: "Postdoc",
            bio: "he is currently a postdoc at HBKU.",
            photo: "Image/hurmat.jpg"
        },
        {
            name: "Atiq",
            title: "Software Engineer",
            bio: "he is currently a software engineer at HBKU.",
            photo: "Image/atiq.png"
        }
    ];

    const teamHtml = teamMembers.map(member => `
        <div class="team-member">
            <img src="${member.photo}" alt="${member.name}" class="team-photo">
            <h3>${member.name}</h3>
            <h4>${member.title}</h4>
            <p>${member.bio}</p>
        </div>
    `).join('');

    contentDiv.innerHTML = `<h2>Team</h2>${teamHtml}`;
}
