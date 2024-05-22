import React from "react";
import ReactDOM from "react-dom/client";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import ThemeCustomization from "@/config/themes";
import Italian from "@/lang/it.json";
import English from "@/lang/en.json";
import AppRouter from "@/components/navigation/router";
import "@/index.css";
import "./i18n";
import { DEFAULT_RESET_TOAST_TIME } from "./utils/config";

const locale = navigator.language;
let lang;
if (locale === "it-IT") {
  lang = Italian;
} else {
  lang = English;
}

let toastAutoHideDuration = DEFAULT_RESET_TOAST_TIME;
try {
  const generalConfiguration = await import("@/config/general");
  toastAutoHideDuration =
    generalConfiguration.RESET_TOAST_INTERVAL || DEFAULT_RESET_TOAST_TIME;
} catch (e) {
  console.warn(e);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeCustomization>
      <SnackbarProvider maxSnack={3} autoHideDuration={toastAutoHideDuration}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeCustomization>
  </React.StrictMode>
);
