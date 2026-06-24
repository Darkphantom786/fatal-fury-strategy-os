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
