import React from "react";
import styled from "styled-components";
import {
  ACTION_SELECTED_TICKET,
  MAX_TICKET_BUY
} from "../tickets/tickets.constant";
import { actionTogglePopup } from "src/shared/popup/popup.actions";
import { useDispatch, useSelector } from "react-redux";
import { ticketsSelector } from "../tickets/tickets.selector";

interface IProps {
  ticket: any;
}

const Styled = styled.div`
  &.ticket {
    cursor: pointer;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: solid 1px transparent;
    &.standard {
      border: solid 1px #fff;
    }
    &.vip {
      border: solid 1px #2f904f;
    }
    &.deluxe {
      border: solid 1px #7ea5e2;
    }
    &.unavailable {
      background: #1e1e1e;
      border: unset;
    }
    &.selected {
      background: #fff;
      border: unset;
    }
    &.area {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

const Ticket = ({ ticket }: IProps) => {
  const { id } = ticket;
  const dispatch = useDispatch();
  const { ticketsSelected } = useSelector(ticketsSelector);
  const selected = id === ticketsSelected[id]?.id;
  const couldSelected = ticket.status === "normal";
  const handleSelectTicket = () => {
    if (!couldSelected) {
      return;
    }
    if (Object.keys(ticketsSelected).length === MAX_TICKET_BUY && !selected) {
      return dispatch(
        actionTogglePopup({
          toggle: true,
          data: {
            comp: "maxTicketBuy"
          }
        })
      );
    }
    dispatch({
      type: ACTION_SELECTED_TICKET,
      payload: ticket
    });
  };
  return (
    <Styled
      onClick={handleSelectTicket}
      className={`ticket ${selected ? "selected" : ""} ${
        ticket.status
      } ${ticket.details.type.toLowerCase()}`}
    ></Styled>
  );
};

export default Ticket;
