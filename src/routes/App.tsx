import React from "react";
import { Styled } from "./App.styled";
import { compose, branch, renderComponent } from "recompose";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import BookTicket from "./bookTicket";
import enhanceContent from "./content/content.enhance";
import Loading from "src/shared/components/loading";
import ticketsEnhance from "./tickets/tickets.enhance";

export interface IProps {
  content: any;
}

const App = (props: IProps) => {
  return (
    <Styled className={`app`}>
      <Switch>
        <Route exact path="/book-ticket">
          <BookTicket />
        </Route>
      </Switch>
    </Styled>
  );
};

export default compose<IProps, any>(
  connect((state: any) => ({}), {}),
  enhanceContent,
  ticketsEnhance,
  branch(
    (props: IProps) => !props.content.isFetched,
    renderComponent(() => <Loading />)
  )
)(App);
