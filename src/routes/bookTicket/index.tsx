import React from "react";
import styled from "styled-components";
import Content from "../content";
import { breakpoints } from "src/shared/utils/styled";
import Bottom from "./bookTicket.bottom";
import Tickets from "./bookTicket.seats";

interface IProps {}

const Styled = styled.div`
  &.book-ticket {
    min-width: ${breakpoints.xs};
    max-width: ${breakpoints.sm};
    margin: 0 auto;
    height: 100vh;
    background: #000;
    padding: 20px;
  }
`;

const BookTicket = (props: IProps) => {
  return (
    <Styled className="book-ticket">
      <Content />
      <Tickets />
      <Bottom />
    </Styled>
  );
};

export default BookTicket;
