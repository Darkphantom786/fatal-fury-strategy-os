async function loadMoves(characterId) {

    try {

        const response =
            await fetch(`./data/moves/${characterId}-moves.json`);

        if (!response.ok) {
            throw new Error("Move file not found");
        }

        return await response.json();

    }

    catch(error) {

        console.error(error);

        return null;
    }
}
