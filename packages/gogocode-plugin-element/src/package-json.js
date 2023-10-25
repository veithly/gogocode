module.exports = function (source, api, options) {
    // 运行 element upgrade 升级到 element-plus

    // dependencies devDependencies
    function updateDepVersion(pkg, type, key, val) {
        if (pkg[type] && pkg[type][key]) {
            pkg[type][key] = val;
        }
    }

    function addDep(pkg, type, key, val) {
        if (!pkg[type]) {
            pkg[type] = {};
        }
        pkg[type][key] = val;
    }

    function removeDep(pkg, type, key) {
        if (pkg[type] && pkg[type][key]) {
            delete pkg[type][key];
        }
    }

    try {
        const pkg = JSON.parse(source);
        removeDep(pkg, 'dependencies', 'element-ui');
        addDep(pkg, 'dependencies', 'element-plus', '^2.3.14');
        addDep(pkg, 'dependencies', '@element-plus/icons-vue', '^2.1.0');
        return JSON.stringify(pkg, null, 2);
    } catch (error) {
        return source;
    }
};
