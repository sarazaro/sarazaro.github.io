import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { HashRouter, Route } from "react-router-dom";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import ButtonBase from "@material-ui/core/ButtonBase";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="header-container">
            <div className="header-logo">
              <ButtonBase className="header-logo">Sara Zaro</ButtonBase>
            </div>
            <div className="header-right-items">
              <div className="header-item-container">
                <ButtonBase>
                  <div className="header-item">Me in a nutshell</div>
                </ButtonBase>
              </div>
              <div className="header-item-container">
                <ButtonBase>
                  <div className="header-item">My life</div>
                </ButtonBase>
              </div>
              <div className="header-item-container">
                  <ButtonBase>
                    <div className="header-item">Social</div>
                  </ButtonBase>
              </div>
              <div className="header-item-container">
                  <ButtonBase>
                    <div className="header-item">Resume</div>
                  </ButtonBase>
              </div>
              <div className="header-item-container">
                  <ButtonBase>
                    <div className="header-item">Contact</div>
                  </ButtonBase>
              </div>
            </div>
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
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