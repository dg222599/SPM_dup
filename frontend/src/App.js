import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const userLoggedIn = useGlobalContext();

  return (
    <div className="App v-100 h-100">
      <Navbar />

      <NotificationContainer />
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            <ProtectedRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route
              path="/forgot-password"
              render={(props) => <ForgotPassword {...props} />}
            />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
