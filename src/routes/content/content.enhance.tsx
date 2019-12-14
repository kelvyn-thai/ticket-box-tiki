import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { ACTION_FETCH } from "./content.constant";
import { withRouter } from "react-router";

interface IProps {
  content: any;
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
    if (!props.content.isFetched) {
      props.fetchContent({ id: "1" });
    }
  }, []);
  return <WrappedComponent {...props} />;
};

export default compose<IProps, any>(
  withRouter,
  connect(
    (state: any) => ({
      content: state.content
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
