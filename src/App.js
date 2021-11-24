import "./App.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import BlogPage from "./containers/BlogPage";
import DailyTips from "./containers/DailyTips";
import Doctor from "./containers/Doctor";
import LoginPage from "./containers/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Doctors">
            <Doctor />
          </Route>
          <Route exact path="/Blogs">
            <BlogPage />
          </Route>
          <Route exact path="/Daily-Tips">
            <DailyTips />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
        </Switch>
        <Footer />
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </Router>
  );
}

export default App;
