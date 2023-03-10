import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/app/app";
import { setupStore } from "./store/store";

const root = createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
