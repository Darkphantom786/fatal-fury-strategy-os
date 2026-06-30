import DatabaseConfig from "../config/database-config.js";

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

        console.log("================================");
        console.log("Strategy OS Database Engine");
        console.log("Loading Database...");
        console.log("================================");

        await this.loadCharacters();

        this.initialized = true;

        console.log("Database Loaded Successfully.");

    }

    async loadJSON(path) {

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Failed to load ${path}`);
        }

        return await response.json();

    }

    async loadCharacters() {

        for (const character of DatabaseConfig.supportedCharacters) {

            this.database.characters[character] = {

                character: await this.loadJSON(`${DatabaseConfig.database.characters}${character}/character.json`),

                movement: await this.loadJSON(`${DatabaseConfig.database.characters}${character}/movement.json`),

                normals: await this.loadJSON(`${DatabaseConfig.database.characters}${character}/normals.json`),

                specials: await this.loadJSON(`${DatabaseConfig.database.characters}${character}/specials.json`),

                supers: await this.loadJSON(`${DatabaseConfig.database.characters}${character}/supers.json`),

                throws: await this.loadJSON(`${DatabaseConfig.database.characters}${character}/throws.json`)

            };

        }

    }

    getCharacter(name) {

        return this.database.characters[name.toLowerCase()] || null;

    }

}

const databaseEngine = new DatabaseEngine();

export default databaseEngine;
