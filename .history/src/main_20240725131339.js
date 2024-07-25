import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";
import "./assets/styles/main.scss";
UIkit.use(Icons);

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
