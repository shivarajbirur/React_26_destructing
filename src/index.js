import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import App from "../src/components/App.jsx";

const myElement = <App />;
const root = createRoot(document.getElementById("root"));
root.render(myElement);
