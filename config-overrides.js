const {alias} = require("react-app-rewire-alias")

module.exports = function override(config){
    alias({
        '@components': "src/components",
        "@icons": "src/icons",
        "@/": "src/"
    })(config);

    return config;
}