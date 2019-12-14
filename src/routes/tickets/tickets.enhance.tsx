import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { ACTION_FETCH } from "./tickets.constant";
import { withRouter } from "react-router";

interface IProps {
  tickets: any;
  fetchContent: (
    payload: any
  ) => {
    type: string;
    payload: any;
  };
  match: any;
}

const enhance = (WrappedComponent: any) => (props: IProps) => {
  React.useEffect(() => {
    if (!props.tickets.isFetched) {
      props.fetchContent({ id: "1" });
    }
  }, []);
  return <WrappedComponent {...props} />;
};

export default compose<IProps, any>(
  withRouter,
  connect(
    (state: any) => ({
      tickets: state.tickets
    }),
    {
      fetchContent: (payload: any) => ({
        type: ACTION_FETCH,
        payload
      })
    }
  ),
  enhance
);
