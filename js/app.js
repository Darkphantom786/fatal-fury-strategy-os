document.addEventListener("DOMContentLoaded", async () => {

    const character = await loadCharacter("marco");

    if (!character) {

        document.getElementById("character-info").innerHTML =
            "<div class='card'>Character Not Found</div>";

        return;
    }

    document.getElementById("character-info").innerHTML = `

        <div class="card">

            <h2>${character.name}</h2>

            <p><strong>Game:</strong> ${character.game}</p>

            <p><strong>Style:</strong> ${character.profile.style}</p>

            <p><strong>Difficulty:</strong> ${character.profile.difficulty}</p>

            <h3>Strengths</h3>

            <ul>
                ${character.strengths.map(item => `<li>${item}</li>`).join("")}
            </ul>

            <h3>Weaknesses</h3>

            <ul>
                ${character.weaknesses.map(item => `<li>${item}</li>`).join("")}
            </ul>

        </div>

    `;
});
