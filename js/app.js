
document.addEventListener("DOMContentLoaded", () => {
    loadCharacter();
});

async function loadCharacter() {

    try {

        const response = await fetch("./data/marco.json");
        const data = await response.json();

        document.getElementById("character-info").innerHTML = `
            <div class="card">

                <h2>${data.name}</h2>

                <p><strong>Game:</strong> ${data.game}</p>

                <p><strong>Style:</strong> ${data.style}</p>

                <p><strong>Difficulty:</strong> ${data.difficulty}</p>

                <h3>Strengths</h3>

                <ul>
                    ${data.strengths.map(item => `<li>${item}</li>`).join("")}
                </ul>

                <br>

                <h3>Weaknesses</h3>

                <ul>
                    ${data.weaknesses.map(item => `<li>${item}</li>`).join("")}
                </ul>

            </div>
        `;

    } catch (error) {

        document.getElementById("character-info").innerHTML =
            `<div class="card">Failed to load character data.</div>`;

        console.error(error);
    }
}
