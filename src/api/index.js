const apiContext = require.context("./v1/", true, /\.js$/);

const install = Vue => {
    if (install.installed) {
        return;
    }
    install.installed = true;

    apiContext.keys().forEach(component => {
        const componentConfig = apiContext(component);
        const ctrl = componentConfig.default || componentConfig;
        Object.defineProperty(Vue.prototype, `$${ctrl.name}`, {
            get() {
                return ctrl;
            }
        });
    });
};

export default install;
