import React from "react";
import styled from "styled-components";
import withTranslate from "src/shared/components/hoc/withTranslate";
import { useDispatch } from "react-redux";
import { actionClosePopup } from "src/shared/popup/popup.actions";

interface IProps {
  translate: any;
}

const Styled = styled.div`
  &.popup {
    width: 80%;
    height: 150px;
    background: #fff;
    border-radius: 10px;
    padding: 2%;
    .close-icon {
      text-align: right;
    }
    .close-icon button {
      width: 24px;
    }
    .break {
      margin: 20px 0;
      height: 2px;
      background: #aaa;
    }
    .btn-ok {
      text-align: right;
      .btn {
        width: 40px;
      }
    }
    .des,
    hilight {
      color: #000;
      font-size: 14px;
      line-height: 18px;
    }
    .des hilight {
      font-family: MavenPro-Bold;
    }
  }
`;

const Popup = (props: IProps) => {
  const dispatch = useDispatch();
  const { maxTicketBuy, btnOK } = props.translate.bookTicket.popup;
  return (
    <Styled className="popup abs-center">
      <div className="close-icon">
        <button className="" onClick={() => dispatch(actionClosePopup())}>
          <img src={`images/icons/close.svg`} alt="" />
        </button>
      </div>
      <p
        className="des"
        dangerouslySetInnerHTML={{
          __html: maxTicketBuy
        }}
      ></p>
      <div className="break"></div>
      <div className="btn-ok" onClick={() => dispatch(actionClosePopup())}>
        <button className="btn">{btnOK}</button>
      </div>
    </Styled>
  );
};

export default withTranslate(Popup);
