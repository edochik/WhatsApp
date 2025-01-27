import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.scss";
import App from "./app/App.tsx";
import store from "./redux/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
