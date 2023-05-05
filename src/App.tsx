// importing core functions from packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importing from custom made
import routes from "./routes";
import "./App.css";

function App() {
  console.log();
  return (
    <Router>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
