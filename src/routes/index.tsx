import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Home from "../pages/home";

interface Props {}

const Routes = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStatetoProps = (state: any) => ({});

export default connect(mapStatetoProps)(Routes);
