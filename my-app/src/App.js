import React from "react";
import { TodosProvider } from "./context/TodosContext";
import { AppContent } from "./components/app-content/AppContent";

export const App = () => (
  <TodosProvider>
    <AppContent />
  </TodosProvider>
);
