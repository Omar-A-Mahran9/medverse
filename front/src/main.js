import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { GoogleMap } from "vue3-google-map";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/app.scss";
import bootstrap from "bootstrap/dist/js/bootstrap.js";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faTwitter, faFacebook, faInstagram);
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router, bootstrap, GoogleMap)
  .mount("#app");
