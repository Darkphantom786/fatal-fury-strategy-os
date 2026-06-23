function initializeSafeJumpEngine() {

    const button =
        document.getElementById("safeJumpButton");

    button.addEventListener("click", () => {

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

        document.getElementById(
            "safeJumpResults"
        ).innerHTML = `

            <strong>Knockdown:</strong>
            ${knockdown}f

            <br><br>

            <strong>Jump Duration:</strong>
            ${jumpDuration}f

            <br><br>

            <strong>Remaining Frames:</strong>
            ${remaining}f

        `;
    });

    console.log(
        "Safe Jump Engine Ready"
    );
}
