class DatabaseEngine {

    constructor() {

        this.database = {
            characters: {},
            matchups: {},
            mechanics: {},
            setups: {},
            patches: {},
            validation: {}
        };

        this.initialized = false;

    }

    async initialize() {

        if (this.initialized) {
            return;
        }

        console.log("==================================");
        console.log("Strategy OS Database Engine");
        console.log("Initializing...");
        console.log("==================================");

        this.initialized = true;

    }

    getDatabase() {
        return this.database;
    }

    getCharacters() {
        return this.database.characters;
    }

    getMatchups() {
        return this.database.matchups;
    }

    getMechanics() {
        return this.database.mechanics;
    }

    getSetups() {
        return this.database.setups;
    }

    getPatches() {
        return this.database.patches;
    }

    getValidation() {
        return this.database.validation;
    }

}

const databaseEngine = new DatabaseEngine();

export default databaseEngine;
