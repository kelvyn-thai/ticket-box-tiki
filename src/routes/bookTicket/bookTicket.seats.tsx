import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import withTranslate from "src/shared/components/hoc/withTranslate";
import {
  ACTION_SELECTED_TICKET,
  MAX_TICKET_BUY
} from "../tickets/tickets.constant";
import { actionTogglePopup } from "src/shared/popup/popup.actions";

interface IProps {
  translate: any;
}

const Styled = styled.div`
  &.tickets {
    margin-top: 20px;
    .extra {
      display: flex;
      margin-bottom: 20px;
    }
    .seats {
      display: flex;
      justify-content: space-between;
      flex: 1 0 auto;
      padding: 0 5%;
    }
    .ticket {
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
  }
`;

const Tickets = (props: IProps) => {
  const { data, ticketsSelected } = useSelector((state: any) => state.tickets);
  const dispatch = useDispatch();
  const {} = props.translate.bookTicket.tickets;
  const handleSelectTicket = (ticket: any) => {
    if (Object.keys(ticketsSelected).length === MAX_TICKET_BUY) {
      dispatch(
        actionTogglePopup({
          toggle: true,
          data: {
            comp: "maxTicketBuy"
          }
        })
      );
      return;
    }
    if (ticket.status === "normal") {
      dispatch({
        type: ACTION_SELECTED_TICKET,
        payload: ticket
      });
    }
  };
  return (
    <Styled className="tickets">
      <div className="rows">
        {Object.keys(data).map((row: string, index: any) => (
          <div className="extra" key={index}>
            <div className="row">{row}</div>
            <div className="seats">
              {data[row].map((ticket: any) => {
                const { id } = ticket;
                return (
                  <div
                    key={id}
                    onClick={() => handleSelectTicket(ticket)}
                    className={`ticket ${
                      id === ticketsSelected[id]?.id ? "selected" : ""
                    } ${ticket.status} ${ticket.details.type.toLowerCase()}`}
                  ></div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Styled>
  );
};

export default withTranslate(Tickets);
