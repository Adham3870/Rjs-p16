import React from "react";

// Import required components from react-router-dom
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {

  return (
    <BrowserRouter>

      <div>

        <header>
          <h1>My React Website</h1>

          <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/aboutus">About Us</Link>
            {" | "}
            <Link to="/contactus">Contact Us</Link>
          </nav>
        </header>


        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/aboutus"
              element={<About />}
            />

            <Route
              path="/contactus"
              element={<Contact />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;