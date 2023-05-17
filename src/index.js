import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./redux/store";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import HeaderComponent from "./common/components/HeaderComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./common/components/ErrorBoundary";
import AppErrorComponent from "./common/components/AppErrorComponent";

const root = createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary fallback={<AppErrorComponent />}>
          <ToastContainer />
          <HeaderComponent />
          <RouterProvider router={router} />
        </ErrorBoundary>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
