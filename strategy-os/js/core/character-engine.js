class CharacterEngine {

    constructor() {

        this.characters = new Map();

    }

    register(id, data) {

        this.characters.set(id, data);

    }

    get(id) {

        return this.characters.get(id);

    }

    exists(id) {

        return this.characters.has(id);

    }

    getAll() {

        return [...this.characters.values()];

    }

}

window.CharacterEngine = new CharacterEngine();
