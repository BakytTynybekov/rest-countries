import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { GeneralProvider } from "./context/GeneralContext";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <GeneralProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeneralProvider>
  </Provider>
);
