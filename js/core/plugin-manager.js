class PluginManager {

    constructor() {
        this.plugins = new Map();
    }

    register(name, plugin) {
        this.plugins.set(name, plugin);
    }

    get(name) {
        return this.plugins.get(name);
    }

    initializeAll() {
        this.plugins.forEach(plugin => {
            if (plugin && typeof plugin.initialize === "function") {
                plugin.initialize();
            }
        });
    }

}

window.pluginManager = new PluginManager();