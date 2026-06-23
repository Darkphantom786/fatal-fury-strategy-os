async function loadProfiles() {

    const response =
        await fetch(
            "./data/opponents/opponent-profiles.json"
        );

    return await response.json();
}
