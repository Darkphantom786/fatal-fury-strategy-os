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

    }

    async initialize() {

        console.log("Initializing Strategy OS Database Engine...");

    }

}

const databaseEngine = new DatabaseEngine();

export default databaseEngine;
