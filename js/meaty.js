function initializeMeatyEngine() {

    const button =
        document.getElementById("meatyButton");

    button.addEventListener("click", () => {

        const normalAdvantage =
            parseInt(
                document.getElementById(
                    "normalAdvantage"
                ).value
            );

        const activeShift =
            parseInt(
                document.getElementById(
                    "activeShift"
                ).value
            );

        if (
            isNaN(normalAdvantage) ||
            isNaN(activeShift)
        ) {

            document.getElementById(
                "meatyResults"
            ).innerHTML =
                "Enter Valid Values";

            return;
        }

        const newAdvantage =
            normalAdvantage +
            activeShift;

        document.getElementById(
            "meatyResults"
        ).innerHTML = `

            <strong>Normal Advantage:</strong>
            ${normalAdvantage}

            <br><br>

            <strong>Active Frame Shift:</strong>
            ${activeShift}

            <br><br>

            <strong>New Meaty Advantage:</strong>
            +${newAdvantage}

        `;
    });

    console.log(
        "Dynamic Meaty Engine Ready"
    );
}
