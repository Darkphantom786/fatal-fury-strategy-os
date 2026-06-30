function initializeAutoPunishFinder() {

    const button = document.getElementById("punishButton");

    if (!button) return;

    button.addEventListener("click", async () => {

        const startup =
            Number(document.getElementById("punishStartup").value);

        const moves = await loadMoves("marco");

        if (!moves || !moves.moves) {

            document.getElementById("punishResults").innerHTML =
                "Move Database Not Found.";

            return;

        }

        const punishes = moves.moves.filter(move => {

            return move.startup !== null &&
                   move.startup <= startup;

        });

        if (punishes.length === 0) {

            document.getElementById("punishResults").innerHTML =
                "No Punish Found.";

            return;

        }

        let html = "<h3>Available Punishes</h3><ul>";

        punishes.forEach(move => {

            html += `

                <li>

                    <strong>${move.notation}</strong>

                    -

                    ${move.moveName}

                    (${move.startup}F)

                </li>

            `;

        });

        html += "</ul>";

        document.getElementById("punishResults").innerHTML = html;

    });

}
