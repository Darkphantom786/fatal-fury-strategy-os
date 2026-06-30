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

StrategyOS.register(initializeFrameKillEngine);

StrategyOS.register(initializeMeatyEngine);

StrategyOS.register(initializeSafeJumpEngine);

StrategyOS.register(initializeGuardCancelEngine);

StrategyOS.register(initializeProfileEngine);

StrategyOS.register(initializeFallbackEngine);

StrategyOS.register(initializeDualThreatEngine);

StrategyOS.register(initializeSetupLibrary);

StrategyOS.register(initializeMatchupHub);
StrategyOS.register(initializeAutoPunishFinder);

StrategyOS.initialize();

});

async function initializeMatchupHub() {

    const roster = await fetch("./data/roster.json");
    const data = await roster.json();

    const character =
        document.getElementById("character-select");

    const opponent =
        document.getElementById("opponent-select");

    data.characters.forEach(c => {

        character.innerHTML +=
            `<option value="${c.id}">${c.name}</option>`;

        opponent.innerHTML +=
            `<option value="${c.id}">${c.name}</option>`;

    });

    document
        .getElementById("load-matchup")
        .addEventListener("click", async () => {

            const player =
                character.value;

            const enemy =
                opponent.value;

            if (player === enemy) {

                document
                    .getElementById("matchup-content")
                    .innerHTML =
                    "Select different characters.";

                return;

            }

            try {

                const response =
                    await fetch(`data/matchups/${player}-vs-${enemy}.json`);

                const matchup =
                    await response.json();

                document
                    .getElementById("matchup-content")
                    .innerHTML = `

<h2>${matchup.character} vs ${matchup.opponent}</h2>

<p><strong>Difficulty:</strong> ${matchup.difficulty}</p>

<h3>Overview</h3>

<ul>

${matchup.overview.map(x => `<li>${x}</li>`).join("")}

</ul>

<h3>Neutral</h3>

<ul>

${matchup.neutral.map(x => `<li>${x}</li>`).join("")}

</ul>

<h3>Punishes</h3>

<ul>

${matchup.punishes.map(x => `<li>${x}</li>`).join("")}

</ul>

<h3>Notes</h3>

<ul>

${matchup.notes.map(x => `<li>${x}</li>`).join("")}

</ul>

`;

            } catch {

                document
                    .getElementById("matchup-content")
                    .innerHTML =

                    "<h3>Matchup Not Available Yet</h3>";

            }

        });

}
