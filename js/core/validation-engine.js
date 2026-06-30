class ValidationEngine {

    validate(requiredFields, data) {

        const missing = [];

        requiredFields.forEach(field => {

            if (!(field in data)) {

                missing.push(field);

            }

        });

        return {

            valid: missing.length === 0,

            missing

        };

    }

}

window.ValidationEngine = new ValidationEngine();