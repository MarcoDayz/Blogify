import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import "./App.css";

import { AppProvider } from "./context/AppContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
    <AppProvider>
        <App />
    </AppProvider>
</BrowserRouter>
)