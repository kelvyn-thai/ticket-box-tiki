import React from "react";
import { useSelector } from "react-redux";
import withTranslate from "src/shared/components/hoc/withTranslate";
import styled from "styled-components";
import { ticketsSelector } from "../tickets/tickets.selector";
import Ticket from "./bookTicket.ticket";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface IProps {
  translate: any;
}

export const Styled = styled.div`
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
  }
`;

const Tickets = (props: IProps) => {
  const { data } = useSelector(ticketsSelector);
  const {} = props.translate.bookTicket.tickets;
  return (
    <TransformWrapper>
      <Styled className="tickets">
        <div className="rows">
          {Object.keys(data).map((row: string, index: any) => (
            <div className="extra" key={index}>
              <div className="row">{row}</div>
              <div className="seats">
                {data[row].map((ticket: any) => {
                  return (
                    <TransformComponent>
                      <Ticket ticket={ticket} key={ticket.id} />
                    </TransformComponent>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Styled>
    </TransformWrapper>
  );
};

export default withTranslate(Tickets);
