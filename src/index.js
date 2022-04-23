import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { StudentsProvider } from "./context/StudentsContext";
import { ModalsProvider } from "./context/ModalsContext";
import { CurrentModalDataProvider } from "./context/CurrentModalData";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StudentsProvider>
    <ModalsProvider>
      <CurrentModalDataProvider>
        <App />
      </CurrentModalDataProvider>
    </ModalsProvider>
  </StudentsProvider>
);
