async function loadOpponentData() {

    const response =
        await fetch(
            "./data/opponents/marco-opponents.json"
        );

    return await response.json();
}
