class ValidationEngine {

    constructor() {

        this.errors = [];
        this.warnings = [];

    }

    reset() {

        this.errors = [];
        this.warnings = [];

    }

    required(object, field, location) {

        if (!(field in object)) {

            this.errors.push(
                `[${location}] Missing required field: ${field}`
            );

            return false;

        }

        return true;

    }

    notNull(value, field, location) {

        if (value === null || value === undefined) {

            this.warnings.push(
                `[${location}] ${field} is empty.`
            );

            return false;

        }

        return true;

    }

    validateCharacter(characterData) {

        this.reset();

        this.required(characterData, "character", "character.json");
        this.required(characterData, "displayName", "character.json");
        this.required(characterData, "archetype", "character.json");

        return {

            valid: this.errors.length === 0,
            errors: this.errors,
            warnings: this.warnings

        };

    }

}

const validationEngine = new ValidationEngine();

export default validationEngine;
