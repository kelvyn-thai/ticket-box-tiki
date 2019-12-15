import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { contentSelector } from "../content/content.selector";
import withTranslate from "src/shared/components/hoc/withTranslate";
import {
  ticketsSelector,
  totalTicketsPriceSelector
} from "../tickets/tickets.selector";
import { actionClosePopup } from "src/shared/popup/popup.actions";
import { actionFetch } from "./payment.actions";

interface IProps {
  translate: any;
}

const Styled = styled.div`
  background: #fff;
  width: 80%;
  padding: 2%;
  border-radius: 10px;
  overflow-x: hidden;
  .hook {
    font-family: MavenPro-Bold;
    font-size: 16px;
    line-height: 20px;
    color: #000;
    padding: 5px 0;
    > span {
      font-size: 14px;
      line-height: 18px;
      color: #000;
    }
    :nth-child(1) {
    }
    :last-child {
      font-size: 20px;
      line-height: 24px;
      > span {
        font-size: 24px;
        line-height: 30px;
        color: #189eff;
      }
    }
    &.name {
      font-size: 16px;
      line-height: 20px;
      font-family: MavenPro-Bold;
      text-transform: uppercase;
    }
  }
  .break {
    height: 2px;
    background: #aaa;
    margin: 20px -3%;
  }
  .group-btn {
    text-align: right;
  }
  .group-btn .btn {
    padding: 0 5%;
    :first-child {
      background: #000;
    }
    :last-child {
      margin-left: 20px;
    }
  }
  .success .alert {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .success .success-icon {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  .success .des {
    font-size: 22px;
    line-height: 24px;
    color: #189eff;
    font-family: MavenPro-Bold;
    text-transform: uppercase;
  }
  .success .btn-ok {
    text-align: center;
  }
  .success .btn-ok .btn {
    background: #000;
    padding: 0 5%;
    margin: 20px 0;
  }
`;
const PaymentPopup = (props: IProps) => {
  const dispatch = useDispatch();
  const { isFetching, isFetched } = useSelector((state: any) => state.payment);
  const { data } = useSelector(contentSelector);
  const { payment } = props.translate;
  const total = useSelector(totalTicketsPriceSelector);
  const { ticketsSelected: tickets } = useSelector(ticketsSelector);
  const getSeats = () => {
    let result = "";
    Object.keys(tickets).forEach((value: any, index: number, array: any[]) => {
      result += `${tickets[value].row}${tickets[value].seat_num}${
        index === array.length - 1 ? "" : ", "
      }`;
    });
    return result;
  };
  return (
    <Styled className="payment-popup abs-center">
      <div className="banner">
        <img src={data.banner_url} alt="" />
      </div>
      <p className="hook name">{data.name}</p>
      <p className="hook">
        {payment.cinema} <span>{data.cinema}</span>
      </p>
      <p className="hook">
        {payment.showTime}{" "}
        <span>{`${data.time_start_formated}~${data.time_end_formated} | ${data.show_time_formated}`}</span>
      </p>
      <p className="hook">{payment.combo}</p>
      <p className="hook">
        {payment.seats}
        <span>{getSeats()}</span>
      </p>
      <p className="hook">
        {payment.total} <span>{total}</span>
      </p>
      <div className="break"></div>
      {!isFetched ? (
        <div className="group-btn">
          <button className="btn" onClick={() => dispatch(actionClosePopup())}>
            {payment.btnCancel}
          </button>
          <button className="btn" onClick={() => dispatch(actionFetch({}))}>
            {`${payment.btnPay}${isFetching ? "..." : ""}`}
          </button>
        </div>
      ) : (
        <div className="success">
          <div className="alert">
            <div className="success-icon">
              <img src={`images/icons/success.svg`} alt="" />
            </div>
            <p className="des">{payment.paymentSuccess}</p>
          </div>
          <div className="btn-ok">
            <button
              className="btn"
              onClick={() => (window.location.href = "/")}
            >
              {payment.btnOK}
            </button>
          </div>
        </div>
      )}
    </Styled>
  );
};

export default withTranslate(PaymentPopup);
