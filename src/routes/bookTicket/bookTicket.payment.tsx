import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { contentSelector } from "../content/content.selector";
import { ticketsSelector } from "../tickets/tickets.selector";
import { formatCurrency } from "src/shared/utils";
import withTranslate from "src/shared/components/hoc/withTranslate";

interface IProps {
  translate: any;
}

const Styled = styled.div`
  &.payment {
    padding: 5%;
  }
  &.payment .hook {
    display: flex;
    justify-content: space-between;
  }
  &.payment .hook .info .cinema {
    font-size: 14px;
    line-height: 18px;
    color: #000;
  }
  &.payment .hook .info .time > span {
    font-size: 16px;
    line-height: 20px;
    color: #000;
    :first-child {
      position: relative;
      padding-right: 10px;
      ::after {
        content: "";
        position: absolute;
        height: 80%;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        background: #000;
        right: 0;
      }
    }
    :last-child {
      padding-left: 10px;
    }
  }
  &.payment .hook .total .total-price {
    font-size: 20px;
    line-height: 24px;
    color: #000;
    font-family: MavenPro-Bold;
    padding-right: 30px;
    position: relative;
    ::after {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 20px;
      height: 20px;
      background-image: url(images/icons/information.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      content: "";
    }
  }
  &.payment .group-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  &.payment .group-btn .btn {
    background: #000;
    padding: 0 5%;
    border-radius: unset;
    margin: 0 10px;
  }
`;

const Payment = (props: IProps) => {
  const {
    cinema,
    time_start_formated,
    time_end_formated,
    show_time_formated
  } = useSelector(contentSelector).data;
  const { total } = useSelector(ticketsSelector);
  const { btnCombo, btnPayment } = props.translate.bookTicket.payment;
  return (
    <Styled className="payment">
      <div className="hook">
        <div className="info">
          <p className="cinema">{cinema}</p>
          <p className="time">
            <span>{`${time_start_formated}~${time_end_formated}`}</span>
            <span>{`${show_time_formated}`}</span>
          </p>
        </div>
        <div className="total">
          <p className="total-price">{formatCurrency(total)}</p>
        </div>
      </div>
      <div className="group-btn">
        <button className="btn">{btnCombo}</button>
        <button className="btn">{btnPayment}</button>
      </div>
    </Styled>
  );
};

export default withTranslate(Payment);
