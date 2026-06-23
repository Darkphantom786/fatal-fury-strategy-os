function initializeProfileEngine() {

    alert("PROFILE ENGINE STARTED");

    const button =
        document.getElementById(
            "profileButton"
        );

    button.addEventListener(
        "click",
        async () => {

            const name =
                document.getElementById(
                    "profileSelect"
                ).value;

            const data =
    await loadProfiles();

alert(JSON.stringify(data));

            const profile =
    data.profiles.find(
        p => p.name === name
    );

alert(JSON.stringify(profile));
            document.getElementById(
                "profileResults"
            ).innerHTML = `

                <strong>Name:</strong>
                ${profile.name}

                <br><br>

                <strong>Fastest DP:</strong>
                ${profile.fastestDP}f

                <br><br>

                <strong>Fastest Super:</strong>
                ${profile.fastestSuper}f

                <br><br>

                <strong>Hidden Gear:</strong>
                ${profile.fastestHiddenGear}f

                <br><br>

                <strong>Guard Cancel:</strong>
                ${profile.guardCancelStartup}f

            `;
        }
    );

    console.log(
        "Opponent Profile System Ready"
    );
}
