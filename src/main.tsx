import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./app/store";
import App from "./App";
import "./styles/index.scss";
import { AppThemeProvider } from "./theme/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppThemeProvider>
  </StrictMode>
);
