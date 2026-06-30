class DatabaseEngine {

    constructor() {

        this.characters = {};

    }

    async initialize() {

        try {

            const response = await fetch("../database/characters/marco/character.json");

            const marco = await response.json();

            this.characters["marco"] = marco;

            console.log("Database Engine Ready");

        }

        catch (error) {

            console.error("Database Load Failed", error);

        }

    }

    getCharacter(id) {

        return this.characters[id];

    }

}

const databaseEngine = new DatabaseEngine();

export default databaseEngine;
