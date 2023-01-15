import { createApp } from "vue";
import App from "./App.vue";
import Plugins from "./plugins.js";

// css import
import "@/assets/css/styles.css";

const app = createApp(App);

app.use(Plugins);
app.mount("#app");
