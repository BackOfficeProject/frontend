import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./store/AuthContext";
import { AppRouter } from "./router";

export function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRouter />
      </Router>
    </AuthProvider>
  );
}
export default App;
