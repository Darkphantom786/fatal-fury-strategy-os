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

        let foundRoute = null;

        for (let moveA of data.frameKillMoves) {

            for (let moveB of data.frameKillMoves) {

                if (
                    moveA.frames +
                    moveB.frames ===
                    targetFrames
                ) {

                    foundRoute = `
                        ${moveA.move}
                        (${moveA.frames}f)

                        +

                        ${moveB.move}
                        (${moveB.frames}f)

                        =

                        ${targetFrames}f
                    `;

                    break;
                }
            }

            if (foundRoute) break;
        }

        document.getElementById(
            "frameKillResults"
        ).innerHTML =
            foundRoute ||
            "No Route Found";
    });

    console.log(
        "Frame Kill Engine Ready"
    );
}
