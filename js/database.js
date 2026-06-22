async function loadCharacter(characterId) {

    try {

        const response =
            await fetch(`./data/characters/${characterId}.json`);

        if (!response.ok) {
            throw new Error("Character file not found");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return null;
    }
}
