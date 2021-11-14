import "./App.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import BlogPage from "./containers/BlogPage";
import DailyTips from "./containers/DailyTips";
import Doctor from "./containers/Doctor";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Doctor />
      <BlogPage />
      <DailyTips />
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
  );
}

export default App;
