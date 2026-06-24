async function loadSetupLibrary() {

```
const response =
    await fetch(
        "./data/setup-library.json"
    );

return await response.json();
```

}

function initializeSetupLibrary() {

```
const button =
    document.getElementById(
        "saveSetupButton"
    );

button.addEventListener(
    "click",
    () => {

        const setupName =
            document.getElementById(
                "setupName"
            ).value;

        const setupNotes =
            document.getElementById(
                "setupNotes"
            ).value;

        if (
            !setupName ||
            !setupNotes
        ) {

            document.getElementById(
                "setupResults"
            ).innerHTML =
                "Enter Setup Name And Notes";

            return;
        }

        document.getElementById(
            "setupResults"
        ).innerHTML = `

            <strong>Saved Setup:</strong>

            <br><br>

            ${setupName}

            <br><br>

            <strong>Notes:</strong>

            <br><br>

            ${setupNotes}

        `;
    }
);

console.log(
    "Setup Library System Ready"
);
```

}
