function displayTeamContent() {
    worldMap.style.display = "none";
    
    
    const teamMembers = [
        {
            name: "Mowafa",
            title: "Professor",
            bio: "he is currently a professor at HBKU",
            photo: "mowafa.jpg"
        },
        {
            name: "Hurmat",
            title: "Postdoc",
            bio: "he is currently a postdoc at HBKU.",
            photo: "hurmat.jpg"
        },
        {
            name: "Atiq",
            title: "Software Engineer",
            bio: "he is currently a software engineer at HBKU.",
            photo: "atiq.png"
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
