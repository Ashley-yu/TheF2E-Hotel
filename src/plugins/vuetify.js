import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#496146',
                secondary: '#E3EAE2',
                error: '#C65021',
            },
        },
    },
});
