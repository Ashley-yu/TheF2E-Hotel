const snackbarPlugin = {
    install: (Vue, { store }) => {
        if (!store) {
            throw new Error("Please provide vuex store.");
        }
        Vue.prototype.$snackbar = {
            showMessage: function({ content = "", color = "" }) {
                store.commit(
                    "snackbar/showMessage",
                    { content, color },
                    { root: true }
                );
            },
            error: function(content) {
                store.commit(
                    "snackbar/showMessage",
                    { content, color: "error" },
                    { root: true }
                );
            },
            warning: function(content) {
                store.commit(
                    "snackbar/showMessage",
                    { content, color: "warning" },
                    { root: true }
                );
            },
            info: function(content) {
                store.commit(
                    "snackbar/showMessage",
                    { content, color: "primary" },
                    { root: true }
                );
            }
        };
    }
};
export default snackbarPlugin;
