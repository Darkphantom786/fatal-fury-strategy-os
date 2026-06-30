const DatabaseConfig = {

    version: "1.0.0",

    database: {

        characters: "strategy-os/database/characters/",
        matchups: "strategy-os/database/matchups/",
        setups: "strategy-os/database/setups/",
        mechanics: "strategy-os/database/mechanics/",
        patches: "strategy-os/database/patches/",
        validation: "strategy-os/database/validation/"

    },

    supportedCharacters: [

        "marco"

    ],

    plugins: {

        frameKillEngine: true,
        meatyEngine: true,
        safeJumpEngine: true,
        matchupEngine: true,
        aiEngine: true,
        validationEngine: true

    }

};

export default DatabaseConfig;
