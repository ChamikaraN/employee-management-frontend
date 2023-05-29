import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./redux/store";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import ErrorBoundary from "./components/ErrorBoundary";
import AppErrorComponent from "./components/AppErrorComponent";
import MainLayout from "./layouts/MainLayout";
import "./assets/styles.css";

const root = createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary fallback={<AppErrorComponent />}>
          <MainLayout>
            <RouterProvider router={router} />
          </MainLayout>
        </ErrorBoundary>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
