import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {MantineProvider} from "@mantine/core";
import {Provider} from "react-redux";
import {store} from "./rtk/app/store.ts";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <MantineProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MantineProvider>
    </>
  </React.StrictMode>
);
