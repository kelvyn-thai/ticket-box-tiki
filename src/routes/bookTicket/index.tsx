import React from "react";
import styled from "styled-components";
import Content from "../content";
import { breakpoints } from "src/shared/utils/styled";
import Bottom from "./bookTicket.bottom";
import Tickets from "./bookTicket.seats";
import Payment from "./bookTicket.payment";

interface IProps {}

const Styled = styled.div`
  &.book-ticket-wrapper {
    min-width: ${breakpoints.xs};
    max-width: ${breakpoints.sm};
    margin: 0 auto;
    height: 100vh;
    .book-ticket {
      background: #000;
      padding: 20px;
    }
    .logo {
      width: 128px;
      height: 128px;
    }
  }
`;

const BookTicket = () => {
  return (
    <div className="book-ticket">
      <Content />
      <Tickets />
      <Bottom />
    </div>
  );
};

const BookTicketWrapper = (props: IProps) => {
  return (
    <Styled className="book-ticket-wrapper">
      <div className="logo">
        <img src={`images/logo.png`} alt="" />
      </div>
      <BookTicket />
      <Payment />
    </Styled>
  );
};

export default BookTicketWrapper;
