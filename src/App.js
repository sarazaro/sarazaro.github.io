import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { HashRouter, Route, Link } from "react-router-dom";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Home from "./components/Home";
import MeInANutshell from "./components/MeInANutshell";
import MyLife from "./components/MyLife";
import Social from "./components/Social";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="header-container">
            <div className="header-logo">
              <Link to="/" className="header-logo">Sara Zaro</Link>
            </div>
            <div className="header-right-items">
                <Link to="/me-in-a-nutshell" className="header-item">Me in a nutshell</Link>
                <Link to="/my-life" className="header-item">My life</Link>
                <Link to="/social" className="header-item">Social</Link>
                <Link to="/resume" className="header-item">Resume</Link>
                <Link to="/contact" className="header-item">Contact</Link>
            </div>
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/me-in-a-nutshell" component={MeInANutshell} />
            <Route path="/my-life" component={MyLife} />
            <Route path="/social" component={Social} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;

const theme = createMuiTheme({
  palette: {
      primary: {
          light: "#ffcdcd",
          main: "#eba5a5",
          dark: "#c07c7c",
          contrastText: "#ffcdcd"
      },
      secondary: {
        light: "#a9dcc3",
        main: "#85bca1",
        dark: "#52866d",
        contrastText: "#c8f6e0"
    },
  }
})