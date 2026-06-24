function initializeDualThreatEngine() {

    const button =
        document.getElementById(
            "dualThreatButton"
        );

    button.addEventListener(
        "click",
        () => {

            const dpStartup =
                parseInt(
                    document.getElementById(
                        "dpStartup"
                    ).value
                );

            const superStartup =
                parseInt(
                    document.getElementById(
                        "superStartup"
                    ).value
                );

            if (
                isNaN(dpStartup) ||
                isNaN(superStartup)
            ) {

                document.getElementById(
                    "dualThreatResults"
                ).innerHTML =
                    "Enter Valid Values";

                return;
            }

            let meatySafety;
            let safeJumpSafety;
            let baitRequired;

            if (
                dpStartup <= 5 ||
                superStartup <= 3
            ) {

                meatySafety = "UNSAFE";
                safeJumpSafety = "UNSAFE";
                baitRequired = "YES";

            } else {

                meatySafety = "SAFE";
                safeJumpSafety = "SAFE";
                baitRequired = "NO";
            }

            document.getElementById(
                "dualThreatResults"
            ).innerHTML = `

                <strong>Fastest DP:</strong>
                ${dpStartup}f

                <br><br>

                <strong>Fastest Super:</strong>
                ${superStartup}f

                <br><br>

                <strong>Normal Meaty:</strong>
                ${meatySafety}

                <br><br>

                <strong>Safe Jump:</strong>
                ${safeJumpSafety}

                <br><br>

                <strong>Bait Required:</strong>
                ${baitRequired}

            `;
        }
    );

    console.log(
        "Dual Threat Defense Matrix Ready"
    );
}
