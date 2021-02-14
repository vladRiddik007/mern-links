import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/authHook";
import { AuthContext } from "./context/AuthContext";
import { NavBar } from "./components/navBar";
import { Loader } from "./components/Loader";

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />
  }
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <Router>
        {isAuthenticated && <NavBar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
