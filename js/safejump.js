function initializeSafeJumpEngine() {

    const button =
        document.getElementById(
            "safeJumpButton"
        );

    button.addEventListener(
        "click",
        async () => {

            const knockdown =
                parseInt(
                    document.getElementById(
                        "safeJumpKnockdown"
                    ).value
                );

            const jumpDuration =
                parseInt(
                    document.getElementById(
                        "safeJumpDuration"
                    ).value
                );

            const opponentName =
                document.getElementById(
                    "opponentSelect"
                ).value;

            const opponentData =
                await loadOpponentData();

            const opponent =
                opponentData.characters.find(
                    c =>
                    c.name === opponentName
                );

            if (
                isNaN(knockdown) ||
                isNaN(jumpDuration)
            ) {

                document.getElementById(
                    "safeJumpResults"
                ).innerHTML =
                    "Enter Valid Values";

                return;
            }

            const remaining =
                knockdown -
                jumpDuration;

            const safe =
                remaining >=
                opponent.fastestDP;

            document.getElementById(
                "safeJumpResults"
            ).innerHTML = `

                <strong>Opponent:</strong>
                ${opponent.name}

                <br><br>

                <strong>Fastest DP:</strong>
                ${opponent.fastestDP}f

                <br><br>

                <strong>Remaining Frames:</strong>
                ${remaining}f

                <br><br>

                <strong>Status:</strong>

                ${
                    safe
                    ?
                    "SAFE JUMP CONFIRMED"
                    :
                    "NOT SAFE"
                }

            `;
        }
    );

    console.log(
        "Safe Jump Engine V2 Ready"
    );
}
