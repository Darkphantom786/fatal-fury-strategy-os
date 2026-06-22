document.addEventListener("DOMContentLoaded", async () => {

    const character = await loadCharacter("marco");
    const moveData = await loadMoves("marco");

    // Character Section

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

    // Move Database Section

    if (!moveData) {

        document.getElementById("moves-container").innerHTML =
            "<div class='card'>Move Database Not Found</div>";

        return;
    }

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

            <table border="1" width="100%">

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
});
