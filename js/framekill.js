async function loadFrameKillData(characterId) {

    const response =
        await fetch(`./data/moves/${characterId}-framekill.json`);

    return await response.json();
}

async function initializeFrameKillEngine() {

    const data =
        await loadFrameKillData("marco");

    const button =
        document.getElementById("frameKillButton");

    button.addEventListener("click", () => {

        const targetFrames =
            parseInt(
                document.getElementById("knockdownFrames").value
            );

        if (!targetFrames) {

            document.getElementById(
                "frameKillResults"
            ).innerHTML =
                "Enter Knockdown Frames";

            return;
        }

        let routes = [];

        // TWO MOVE SEARCH

        for (let moveA of data.frameKillMoves) {

            for (let moveB of data.frameKillMoves) {

                if (
                    moveA.frames +
                    moveB.frames ===
                    targetFrames
                ) {

                    routes.push(
                        `${moveA.move} (${moveA.frames}f)
                        +
                        ${moveB.move} (${moveB.frames}f)
                        =
                        ${targetFrames}f`
                    );
                }
            }
        }

        // THREE MOVE SEARCH

        for (let moveA of data.frameKillMoves) {

            for (let moveB of data.frameKillMoves) {

                for (let moveC of data.frameKillMoves) {

                    if (
                        moveA.frames +
                        moveB.frames +
                        moveC.frames ===
                        targetFrames
                    ) {

                        routes.push(
                            `${moveA.move} (${moveA.frames}f)
                            +
                            ${moveB.move} (${moveB.frames}f)
                            +
                            ${moveC.move} (${moveC.frames}f)
                            =
                            ${targetFrames}f`
                        );
                    }
                }
            }
        }

        if (routes.length === 0) {

            document.getElementById(
                "frameKillResults"
            ).innerHTML =
                "No Route Found";

            return;
        }

        document.getElementById(
            "frameKillResults"
        ).innerHTML =

            `
            <strong>Data Status:</strong>
            ${data.verificationStatus}

            <br><br>

            <strong>Routes Found:</strong>

            <br><br>

            ${routes.join("<hr>")}
            `;
    });

    console.log(
        "Frame Kill Generator V2 Ready"
    );
}
