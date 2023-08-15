import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "./index.css";
import {MantineProvider} from "@mantine/core";
import {Provider} from "react-redux";
import {store} from "./rtk/app/store.ts";
import {routes} from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <MantineProvider>
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </MantineProvider>
    </>
  </React.StrictMode>
);
