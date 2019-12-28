import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import Result from "./components/Result";
import "./styles/styles.scss";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/result" component={Result} />
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
