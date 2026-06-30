const StrategyOS = {

    engines: [],

    register(engine) {

        this.engines.push(engine);

    },

    initialize() {

        this.engines.forEach(engine => {

            if (typeof engine === "function") {

                engine();

            }

        });

    }

};
