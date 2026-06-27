document.addEventListener("DOMContentLoaded", async () => {

const character = await loadCharacter("marco");
const moveData = await loadMoves("marco");

if (!character) {

    document.getElementById("character-info").innerHTML =
        "<div class='card'>Character Not Found</div>";

} else {

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
}

if (!moveData) {

    document.getElementById("moves-container").innerHTML =
        "<div class='card'>Move Database Not Found</div>";

} else {

    let tableRows = "";

    moveData.moves.forEach(move => {

        tableRows += `

            <tr>
                <td>${move.notation || "-"}</td>
                <td>${move.moveName || "-"}</td>
                <td>${move.startup ?? "-"}</td>
                <td>${move.hitAdvantage ?? "-"}</td>
                <td>${move.blockAdvantage ?? "-"}</td>
                <td>${move.category || "-"}</td>
                <td>${move.verificationStatus || "-"}</td>
            </tr>

        `;
    });

    document.getElementById("moves-container").innerHTML = `

        <div class="card">

            <h2>Marco Frame Data Database</h2>

            <table>

                <thead>

                    <tr>
                        <th>Notation</th>
                        <th>Move</th>
                        <th>Startup</th>
                        <th>Hit</th>
                        <th>Block</th>
                        <th>Category</th>
                        <th>Status</th>
                    </tr>

                </thead>

                <tbody>

                    ${tableRows}

                </tbody>

            </table>

        </div>

    `;
}

initializeFrameKillEngine();
initializeMeatyEngine();
initializeSafeJumpEngine();
initializeGuardCancelEngine();
initializeProfileEngine();
initializeFallbackEngine();
initializeDualThreatEngine();
initializeSetupLibrary();
initializeMatchupHub();

});

function initializeMatchupHub() {

const select = document.getElementById("matchup-select");

if (!select) return;

select.addEventListener("change", async () => {

    if (!select.value) return;

    try {

        const response =
            await fetch(`data/matchups/${select.value}.json`);

        const data = await response.json();

        document.getElementById("matchup-content").innerHTML = `

            <h3>${data.character} vs ${data.opponent}</h3>

            <p><strong>Difficulty:</strong> ${data.difficulty}</p>

            <h4>Overview</h4>
            <ul>${data.overview.map(item => `<li>${item}</li>`).join("")}</ul>

            <h4>Neutral</h4>
            <ul>${data.neutral.map(item => `<li>${item}</li>`).join("")}</ul>

            <h4>Anti Air</h4>
            <ul>${data.antiAir.map(item => `<li>${item}</li>`).join("")}</ul>

            <h4>Punishes</h4>
            <ul>${data.punishes.map(item => `<li>${item}</li>`).join("")}</ul>

            <h4>Safe Jumps</h4>
            <ul>${data.safeJumps.map(item => `<li>${item}</li>`).join("")}</ul>

            <h4>Meaties</h4>
            <ul>${data.meaties.map(item => `<li>${item}</li>`).join("")}</ul>

            <h4>Guard Cancel Notes</h4>
            <ul>${data.guardCancel.map(item => `<li>${item}</li>`).join("")}</ul>

            <h4>Notes</h4>
            <ul>${data.notes.map(item => `<li>${item}</li>`).join("")}</ul>

        `;

    } catch (error) {

        console.error("Matchup load failed:", error);

    }

});

}
