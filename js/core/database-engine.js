class DatabaseEngine {

    constructor() {

        this.cache = new Map();

    }

    async load(path) {

        if (this.cache.has(path)) {

            return this.cache.get(path);

        }

        try {

            const response = await fetch(path);

            const data = await response.json();

            this.cache.set(path, data);

            return data;

        }

        catch (error) {

            console.error("Database Load Error:", error);

            return null;

        }

    }

    clearCache() {

        this.cache.clear();

    }

}

window.DatabaseEngine = new DatabaseEngine();
