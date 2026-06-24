async function loadVerificationLevels() {

    const response =
        await fetch(
            "./data/verification-status.json"
        );

    return await response.json();
}

function getVerificationData(
    status,
    verificationData
) {

    return verificationData
        .verificationLevels
        .find(
            item =>
                item.status === status
        );
}
async function initializeFallbackEngine() {

    const verificationData =
        await loadVerificationLevels();

    const button =
        document.getElementById(
            "fallbackButton"
        );

    button.addEventListener(
        "click",
        () => {

            const selectedStatus =
                document.getElementById(
                    "verificationSelect"
                ).value;

            const result =
                getVerificationData(
                    selectedStatus,
                    verificationData
                );

            document.getElementById(
                "fallbackResults"
            ).innerHTML = `

                <strong>Status:</strong>
                ${result.status}

                <br><br>

                <strong>Confidence:</strong>
                ${result.confidence}

                <br><br>

                <strong>Warning:</strong>
                ${result.warning}

            `;
        }
    );

    console.log(
        "Unknown Data Fallback System Ready"
    );
}
