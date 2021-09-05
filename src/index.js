import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

import { NewsContextProvider } from "./context/NewsContext";
// import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
// const queryClient = new QueryClient();

ReactDOM.render(
  // <React.StrictMode>
  <NewsContextProvider value={{ newsList: [] }}>
    {/* <QueryClientProvider client={queryClient}> */}
    <App />
    {/* </QueryClientProvider> */}
  </NewsContextProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
