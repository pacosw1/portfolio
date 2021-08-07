import logo from "./logo.svg";
import "./App.css";
import { AppContainer, Content } from "./styled";
import { Post } from "./components/Post";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Posts } from "./pages/Posts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorContextProvider } from "./context/errors";
import { ErrorHandler } from "./components/ErrorHandler";

function App() {
  return (
    <AppContainer>
      <ErrorContextProvider code={200}>
        <ErrorHandler>
          <Router>
            <Navbar />
            <Content>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/posts">
                  <Posts />
                </Route>
              </Switch>
            </Content>
          </Router>
        </ErrorHandler>
      </ErrorContextProvider>
    </AppContainer>
  );
}

export default App;
