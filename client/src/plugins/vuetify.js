import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);
export default new Vuetify({
    theme: {
        themes: {
            light: {
                activeLink: "#FFA117",
                primary: "#2196F3",
                secondary: "#0011B1",
                navColor:"#0086F9",
                background:"#E1D9D1",
                accent: "3D87E4"
            },
            dark: {
                navColor:"#444",
                activeLink: "#FFA117",
                secondary: "#0011B1",
            }
        }
    }
});
