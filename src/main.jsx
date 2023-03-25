import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/build/lib/devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContactProvider from "./context/ContactProvider";
import "./index.css";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContactProvider>
        <App />
      </ContactProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
