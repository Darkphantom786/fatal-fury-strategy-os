class PluginManager {

    constructor() {

        this.plugins = new Map();

    }

    register(name, plugin) {

        if (this.plugins.has(name)) {

            console.warn(`Plugin already registered: ${name}`);
            return;

        }

        this.plugins.set(name, plugin);

        console.log(`Plugin Registered: ${name}`);

    }

    get(name) {

        return this.plugins.get(name);

    }

    has(name) {

        return this.plugins.has(name);

    }

    initializeAll() {

        this.plugins.forEach(plugin => {

            if (typeof plugin.initialize === "function") {

                plugin.initialize();

            }

        });

    }

    list() {

        return [...this.plugins.keys()];

    }

}

const pluginManager = new PluginManager();

const pluginManager = new PluginManager();

window.pluginManager = pluginManager;
