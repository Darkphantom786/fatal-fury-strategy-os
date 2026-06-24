function initializeGuardCancelEngine() {

    const button =
        document.getElementById(
            "gcButton"
        );

    button.addEventListener(
        "click",
        () => {

            const blockAdvantage =
                parseInt(
                    document.getElementById(
                        "blockAdvantage"
                    ).value
                );

            const guardCancelStartup =
                parseInt(
                    document.getElementById(
                        "guardCancelStartup"
                    ).value
                );

            if (
                isNaN(blockAdvantage) ||
                isNaN(guardCancelStartup)
            ) {

                document.getElementById(
                    "gcResults"
                ).innerHTML =
                    "Enter Valid Values";

                return;
            }

            const gap =
                guardCancelStartup +
                blockAdvantage;

            let verdict = "";

            if (gap <= 0) {

                verdict =
                    "SAFE";

            } else if (gap <= 3) {

                verdict =
                    "LOW RISK";

            } else if (gap <= 6) {

                verdict =
                    "MEDIUM RISK";

            } else {

                verdict =
                    "HIGH RISK";
            }

            document.getElementById(
                "gcResults"
            ).innerHTML = `

                <strong>Block Advantage:</strong>
                ${blockAdvantage}

                <br><br>

                <strong>Guard Cancel Startup:</strong>
                ${guardCancelStartup}f

                <br><br>

                <strong>Risk Gap:</strong>
                ${gap}

                <br><br>

                <strong>Verdict:</strong>
                ${verdict}

            `;
        }
    );

    console.log(
        "Guard Cancel Safety Engine Ready"
    );
}
