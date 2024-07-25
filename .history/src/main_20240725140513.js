import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/main.scss";
import UIkit from "uikit";
import uikitIcons from "uikit/dist/js/uikit-icons";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";

UIkit.use(Icons, uikitIcons);

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");
